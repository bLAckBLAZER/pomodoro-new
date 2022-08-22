import { removeLocalStorage, setLocalStorage } from "./localStorageCalls";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import React from "react";
import { NavigateFunction } from "react-router-dom";

export const userLogin = async (
  event: React.SyntheticEvent,
  dispatch: React.Dispatch<any>,
  email: string,
  password: string,
  navigate: NavigateFunction,
  gotoPath: string
) => {
  event.preventDefault();
  setPersistence(auth, browserLocalPersistence);

  try {
    const res = await signInWithEmailAndPassword(auth, email, password);

    const user = {
      displayName: res.user.displayName,
      email: res.user.email,
      otherDetails: res.user.metadata,
    };

    dispatch({
      type: "LOGIN",
      payload: { foundUser: user, encodedToken: res.user.uid },
    });

    setLocalStorage("token", res.user.uid);
    setLocalStorage(
      "user",
      {
        displayName: res.user.displayName,
        email: res.user.email,
        otherDetails: res.user.metadata,
      },
      true
    );

    navigate(gotoPath);
  } catch (err) {
    throw new Error("Error in logging in! " + err);
  }
};

export const userLogout = async (
  dispatchAuth: React.Dispatch<any>,
  dispatchTask: React.Dispatch<any>,
  navigate: NavigateFunction
) => {
  setPersistence(auth, browserLocalPersistence);
  try {
    await signOut(auth);

    removeLocalStorage("token");
    removeLocalStorage("user");

    dispatchAuth({ type: "LOGOUT" });
    dispatchTask({ type: "RESET" });
  } catch {
    throw new Error("Logout failed");
  }
};

type SignupDetails = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export const userSignup = async (
  event: React.SyntheticEvent,
  { firstName, lastName, email, password }: SignupDetails,
  dispatch: React.Dispatch<any>,
  navigate: NavigateFunction
) => {
  event.preventDefault();
  setPersistence(auth, browserLocalPersistence);

  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);

    if (auth.currentUser) {
      await updateProfile(auth.currentUser, {
        displayName: `${firstName} ${lastName}`,
      });
    }

    const user = {
      displayName: res.user.displayName,
      email: res.user.email,
      otherDetails: res.user.metadata,
    };

    dispatch({
      type: "LOGIN",
      payload: { foundUser: user, encodedToken: res.user.uid },
    });

    setLocalStorage("token", res.user.uid);
    setLocalStorage(
      "user",
      {
        displayName: res.user.displayName,
        email: res.user.email,
        otherDetails: res.user.metadata,
      },
      true
    );

    navigate("/");
  } catch (err) {
    console.error(err);
  }
};
