import reducer from "./reducer"
import types from "./types"
import actions from "./actions"

describe("authReducer", () => {
  describe("when no known action", () => {
    it("returns default state", () => {
      expect(
        reducer(undefined, { type: "ANOTHER_ACTION" }),
      ).toEqual({
        authenticated: false,
      })
    })
  })

  describe("when receiving AUTH_SIGNIN", () => {
    it("returns authenticated true", () => {
      expect(
        reducer(undefined, { type: types.AUTH_SIGNIN, token: "token" }),
      ).toEqual({
        authenticated: true,
      })
    })
  })

  describe("when receiving AUTH_SIGNOUT", () => {
    it("returns authenticated false", () => {
      expect(
        reducer(undefined, { type: types.AUTH_SIGNOUT }),
      ).toEqual({
        authenticated: false,
      })
    })
  })
})
