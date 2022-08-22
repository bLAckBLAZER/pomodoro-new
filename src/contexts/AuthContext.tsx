import { createContext, useContext, useEffect, useReducer } from "react";
import { authReducer } from "../reducers";
import { getDefaultAuthState } from "./getDefaultAuthState";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

type AuthContextType = {
  authState: {
    token: string;
    user: object;
  };
  dispatchAuth: React.Dispatch<any>;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

const initialState = {
  authState: getDefaultAuthState(),
  dispatchAuth: () => null,
};

const AuthContext = createContext<AuthContextType>(initialState);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authState, dispatchAuth] = useReducer(
    authReducer,
    getDefaultAuthState()
  );

  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/");
      }
    });
  }, [authState]);

  return (
    <AuthContext.Provider value={{ authState, dispatchAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
