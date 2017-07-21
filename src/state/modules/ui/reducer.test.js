import reducer from "./reducer"
import types from "./types"
import actions from "./actions"

describe("uiReducer", () => {
  describe("when no known action", () => {
    it("returns default state", () => {
      expect(
        reducer(undefined, { type: "ANOTHER_ACTION" }),
      ).toEqual({
        showSidebar: false,
      })
    })
  })

  describe("when toggleSidebar with false", () => {
    it("sets showSidebar state", () => {
      const initialState = {
        showSidebar: false,
      }
      expect(
        reducer(initialState, actions.toggleSidebar()),
      ).toEqual({
        showSidebar: true,
      })
    })
  })

  describe("when toggleSidebar with true", () => {
    it("sets showSidebar state", () => {
      const initialState = {
        showSidebar: true,
      }
      expect(
        reducer(initialState, actions.toggleSidebar()),
      ).toEqual({
        showSidebar: false,
      })
    })
  })
})
