
import {call, fork} from 'redux-saga/effects'

import {init} from 'state/sagas/init'
import {routing} from 'state/sagas/routing'

export function * sagas () {
  yield call(init)
  yield fork(routing)
}
