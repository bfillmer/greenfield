
import {put} from 'redux-saga/effects'

import {initApplication} from 'actions'

// Frequently we need some certainty of certain data, authentication state for example, before
// we can properly run our sagas. This init blocks execution of any forks after, giving us a
// place to run whatever checks we need before proceeding.
export function * init () {
  yield put(initApplication())
}
