import { authReducer } from "../reducers/authReducer";
import { getDefaultAuthState } from "../contexts/getDefaultAuthState";

describe("authReducer tests", () => {
  test("should login user", () => {
    const expectedState = {
      user: {
        displayName: "Omkar",
        email: "abc@gmail.com",
        otherDetails: {},
      },
      token: "1234",
    };

    const state = authReducer(getDefaultAuthState(), {
      type: "LOGIN",
      payload: {
        foundUser: {
          displayName: "Omkar",
          email: "abc@gmail.com",
          otherDetails: {},
        },
        encodedToken: "1234",
      },
    });

    expect(state).toEqual(expectedState);
  });

  test("should logout user", () => {
    const expectedState = getDefaultAuthState();

    const state = authReducer(
      {
        user: {
          displayName: "Omkar",
          email: "abc@gmail.com",
          otherDetails: {},
        },
        token: "12345",
      },
      {
        type: "LOGOUT",
      }
    );

    expect(state).toEqual(expectedState);
  });
});
