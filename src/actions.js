
import {createAction} from 'redux-actions'

import * as types from 'types'

// Application Level Concerns
export const initApplication = createAction(types.APPLICATION_INIT)
export const resetStore = createAction(types.APPLICATION_STORE_RESET)
