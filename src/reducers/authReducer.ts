import { getDefaultAuthState } from "../contexts/getDefaultAuthState";

export interface authStateType {
  user: object;
  token: string;
}

type authReducerAction =
  | {
      type: "LOGIN";
      payload: {
        foundUser: object;
        encodedToken: string;
      };
    }
  | {
      type: "LOGOUT";
    };

export const authReducer = (
  state: authStateType,
  action: authReducerAction
) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload?.foundUser,
        token: action.payload?.encodedToken,
      };
    case "LOGOUT":
      return getDefaultAuthState();
    default:
      return state;
  }
};
