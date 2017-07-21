import {
  createUser,
  signinUser,
  userQuery,
} from "./gqls"

describe("authQqls", () => {
  describe("createUser", () => {
    it("has a known query shape", () => {
      expect(createUser).toMatchSnapshot()
    })
  })

  describe("signinUser", () => {
    it("has a known query shape", () => {
      expect(signinUser).toMatchSnapshot()
    })
  })

  describe("userQuery", () => {
    it("has a known query shape", () => {
      expect(userQuery).toMatchSnapshot()
    })
  })
})
