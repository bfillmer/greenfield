
// import {combineReducers} from 'redux'

import {APPLICATION_INIT, APPLICATION_STORE_RESET} from 'types'

// @TODO Swap these out when you begin building out actual reducers.
const appReducer = (state = {}) => state
// const appReducer = combineReducers({})

// Reset the store by passing undefined as the state.
export const reducers = (state, action) => {
  switch (action.type) {
    // Passing undefined tells redux to reset all reducers to initialStates
    case (APPLICATION_STORE_RESET):
      return appReducer(undefined, action)

    // On init flag the store, useful for views that depend on knowledge of init.
    case (APPLICATION_INIT):
      return ({
        init: true,
        ...state
      })

    default:
      return appReducer(state, action)
  }
}
