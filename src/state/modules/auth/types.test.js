import types from "./types"

describe("authTypes", () => {
  it("AUTH_SIGNIN", () => {
    expect(
      types.AUTH_SIGNIN,
    ).toEqual(
      "wunjo/auth/SIGNIN",
    )
  })

  it("AUTH_SIGNOUT", () => {
    expect(
      types.AUTH_SIGNOUT,
    ).toEqual(
      "wunjo/auth/SIGNOUT",
    )
  })
})
