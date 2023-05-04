import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface LoginState {
  isLoggingIn: boolean
  errorMessage: String
}

const initialState: LoginState = {
    isLoggingIn: true,
    errorMessage: ""
}

export const LoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    switchAuth: state => {
      state.errorMessage = ""
      state.isLoggingIn = !state.isLoggingIn
    },
    setErrorMessage: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload
    },
  }
})

export const { switchAuth, setErrorMessage } = LoginSlice.actions

export default LoginSlice.reducer