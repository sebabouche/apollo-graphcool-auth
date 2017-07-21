import types from "./types"

const signIn = (token) => {
  localStorage.setItem("token", token)
  return { type: types.AUTH_SIGNIN }
}

const signOut = () => {
  localStorage.removeItem("token")
  return { type: types.AUTH_SIGNOUT }
}

export default {
  signIn,
  signOut,
}
