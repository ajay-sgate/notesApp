import axios from "axios"
import { SIGNIN_FAILED, SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNOUT_FAILED, SIGNOUT_REQUEST, SIGNOUT_SUCCESS, SIGNUP_FAILED, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./actionTypes"

let baseUrl = "http://localhost:8080/auth"

// Sign Up

export const SignupSuc = (dispatch) => {
    dispatch({ type: SIGNUP_SUCCESS })
}

export const SignupFail = (dispatch) => {
    dispatch({ type: SIGNUP_FAILED })
}

export const SignupFun = (formData) => (dispatch) => {
    dispatch({ type: SIGNUP_REQUEST })
    return axios.post(`${baseUrl}/register`, formData)
}

// Sign In

export const SigninSuc = (payload) => (dispatch) => {
    dispatch({ type: SIGNIN_SUCCESS, payload: payload })
}

export const SigninFail = (dispatch) => {
    dispatch({ type: SIGNIN_FAILED })
}

export const SigninFun = (formData) => (dispatch) => {
    dispatch({ type: SIGNIN_REQUEST })
    return axios.post(`${baseUrl}/login`, formData)
}


// Sign Out

export const SignoutFun = () => {
    localStorage.removeItem("token")
    return { type: SIGNOUT_SUCCESS }
}