import types from "./types"
import actions from "./actions"

describe("uiActions", () => {
  it("toggleSidebar", () => {
    expect(
      actions.toggleSidebar(),
    ).toEqual({
      type: types.TOGGLE_SIDEBAR,
    })
  })
})
