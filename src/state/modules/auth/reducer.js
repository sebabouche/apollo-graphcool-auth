import types from "./types"

const initialState = {
  authenticated: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_SIGNIN:
      return { ...state, authenticated: true }
    case types.AUTH_SIGNOUT:
      return { ...state, authenticated: false }
    default:
      return state
  }
}
