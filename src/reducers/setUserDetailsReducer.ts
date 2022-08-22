type UserDetailsActionType =
  | {
      type:
        | "FIRST_NAME"
        | "LAST_NAME"
        | "EMAIL"
        | "PASSWORD"
        | "CONFIRM_PASSWORD";
      payload: string;
    }
  | {
      type: "TOGGLE_PASSWORD";
    };

type UserDetailsState = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  showPassword: boolean;
};

export const setUserDetailsReducer = (
  state: UserDetailsState,
  action: UserDetailsActionType
) => {
  switch (action.type) {
    case "FIRST_NAME":
      return { ...state, firstName: action.payload };
    case "LAST_NAME":
      return { ...state, lastName: action.payload };
    case "EMAIL":
      return { ...state, email: action.payload };
    case "PASSWORD":
      return { ...state, password: action.payload };
    case "CONFIRM_PASSWORD":
      return { ...state, confirmPassword: action.payload };
    case "TOGGLE_PASSWORD":
      return { ...state, showPassword: !state.showPassword };
    default:
      return state;
  }
};
