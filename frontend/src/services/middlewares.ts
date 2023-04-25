import { isRejectedWithValue } from "@reduxjs/toolkit";
import type { MiddlewareAPI, Middleware } from "@reduxjs/toolkit";

export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
        if (action.payload.data === "wrong_credentials") {
            alert("Mauvais mot de passe")
        }
        if (action.payload.data === "user_not_found") {
            alert("Ce compte n'existe pas")
        }
    }

    return next(action);
  };
