import { isRejectedWithValue } from "@reduxjs/toolkit";
import type { MiddlewareAPI, Middleware } from "@reduxjs/toolkit";
import { setErrorMessage } from "../features/login/LoginSlice";

export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      if (action.payload.data === "wrong_credentials") {
        api.dispatch(setErrorMessage("Mauvais mot de passe"))
      }
      if (action.payload.data === "user_not_found") {
        api.dispatch(setErrorMessage("Ce compte n'existe pas"))
      }
      if (action.payload.data === "choose_another_username") {
        api.dispatch(setErrorMessage("Ce nom d'utilisateur existe déjà"))
      }
    }

    return next(action);
  };
