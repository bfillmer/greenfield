
import {call, fork} from 'redux-saga/effects'

import {routing} from 'state/sagas/routing'

// Frequently we need some certainty of certain data, authentication state for example, before
// we can properly run our sagas. This init blocks execution of any forks after, giving us a
// place to run whatever checks we need before proceeding.
function * init () {}

export function * sagas () {
  yield call(init)
  yield fork(routing)
}
