import axios from "axios"
import { DELETE_FAILED, DELETE_REQUEST, DELETE_SUCCESS, GET_FAILED, GET_REQUEST, GET_SUCCESS, PATCH_FAILED, PATCH_REQUEST, PATCH_SUCCESS, POST_FAILED, POST_REQUEST, POST_SUCCESS } from "./actionTypes"


let baseUrl = "http://localhost:8080/notes"


// Get Notes

export const GetSuccess = (data) => (dispatch) => {
    dispatch({ type: GET_SUCCESS, payload: data })
}

export const GetFail = (dispatch) => {
    dispatch({ type: GET_FAILED })
}

export const GetFunc = (dispatch) => {
    let authToken = localStorage.getItem("token")
    dispatch({ type: GET_REQUEST })
    return axios.get(`${baseUrl}/`, {
        headers: { 'Authorization': `Bearer ${authToken}` }
    })
}

// Post Notes

export const PostSuccess = (dispatch) => {
    dispatch({ type: POST_SUCCESS })
}

export const PostFail = (dispatch) => {
    dispatch({ type: POST_FAILED })
}

export const PostFunc = (data) => (dispatch) => {
    let authToken = localStorage.getItem("token")
    dispatch({ type: POST_REQUEST })
    return axios.post(`${baseUrl}/add`, data, {
        headers: { 'Authorization': `Bearer ${authToken}` }
    })
}

// Delete Notes

export const DeleteSuccess = (dispatch) => {
    dispatch({ type: DELETE_SUCCESS })
}

export const DeleteFail = (dispatch) => {
    dispatch({ type: DELETE_FAILED })
}

export const DeleteFunc = (id) => (dispatch) => {
    let authToken = localStorage.getItem("token")
    dispatch({ type: DELETE_REQUEST })
    return axios.delete(`${baseUrl}/delete/${id}`, {
        headers: { 'Authorization': `Bearer ${authToken}` }
    })
}
// Delete Notes

export const UpdateSuccess = (dispatch) => {
    dispatch({ type: PATCH_SUCCESS })
}

export const UpdateFail = (dispatch) => {
    dispatch({ type: PATCH_FAILED })
}

export const UpdateFunc = (data) => (dispatch) => {
    let authToken = localStorage.getItem("token")
    dispatch({ type: PATCH_REQUEST })
    return axios.patch(`${baseUrl}/update/${data.id}`, data,{
        headers: { 'Authorization': `Bearer ${authToken}` }
    })
}