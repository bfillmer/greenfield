
import {call, cancel, fork, take} from 'redux-saga/effects'
import {eventChannel} from 'redux-saga'

import {router, ROUTE_HOME} from 'router'

// Route Sagas
import {home} from 'state/sagas/home'

// Routes that require side effects on load are mapped here, [type]: saga.
const routesMap = {
  [ROUTE_HOME]: home
}

// Wrap our curi router observable in an eventChannel for ease of use with sagas.
function routerChannel () {
  return eventChannel(emitter => {
    const observer = router.respond(function handleRouteChange ({response}) {
      emitter(response)
    }, {observe: true})
    return () => observer()
  })
}

// Run the saga for a given route if one exists, then watch for the next location change
// and cancel the previously running saga. Route sagas always recieve the location response.
// @NOTE Authentication checks and the like would go within this saga.
function * handleLocationChange (response, channel) {
  try {
    if (response.name && routesMap[response.name]) {
      const task = yield fork(routesMap[response.name], response)
      yield take(channel)
      yield cancel(task)
    }
  } catch (e) {
    // Catch errors to prevent them from bubbling and killing the router.
    console.error(e)
  }
}

export function * routing () {
  const channel = yield call(routerChannel)
  const initialRoute = yield call([router, 'current'])

  // Assuming curi has booted before sagas check for an initial route saga to run.
  if (initialRoute.response) {
    yield call(handleLocationChange, initialRoute.response, channel)
  }

  // Watch for any route changes with curi and run a route saga if it exists.
  while (true) {
    const response = yield take(channel)
    yield call(handleLocationChange, response, channel)
  }
}
