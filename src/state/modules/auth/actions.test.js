import types from "./types"
import actions from "./actions"
import mockLocalStorage from "../../testUtils/mockLocalStorage"

mockLocalStorage()
const token = "some_token"

describe("authActions", () => {
  it("signIn", () => {
    expect(
      actions.signIn(token),
    ).toEqual({
      type: types.AUTH_SIGNIN,
    })
  })
  it("signOut", () => {
    expect(
      actions.signOut(),
    ).toEqual({
      type: types.AUTH_SIGNOUT,
    })
  })
})
