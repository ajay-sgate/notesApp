import axios from "axios"
import { GET_FAILED, GET_REQUEST, GET_SUCCESS } from "./actionTypes"


let baseUrl = "http://localhost:8080/notes"

let authToken = localStorage.getItem("token")
// Get Notes

export const GetSuccess = (data) => (dispatch) => {
    dispatch({ type: GET_SUCCESS , payload: data})
}

export const GetFail = (dispatch) => {
    dispatch({ type: GET_FAILED })
}

export const GetFun = (dispatch) => {
    dispatch({ type: GET_REQUEST })
    return axios.get(`${baseUrl}/`, {
        headers : {'Authorization': `Bearer ${authToken}`}
    })
}