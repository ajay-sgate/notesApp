import { DELETE_FAILED, DELETE_REQUEST, DELETE_SUCCESS, GET_FAILED, GET_REQUEST, GET_SUCCESS, PATCH_FAILED, PATCH_REQUEST, PATCH_SUCCESS, POST_FAILED, POST_REQUEST, POST_SUCCESS } from "./actionTypes"

const initialState = {
    isLoading: false,
    isError: false,
    notes: [],
}


export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_REQUEST:
            return { ...state, isLoading: true }

        case GET_SUCCESS:
            return { ...state, isLoading: false, notes: payload }

        case GET_FAILED:
            return { ...state, isLoading: false, isError: true }

        case POST_REQUEST:
            return { ...state, isLoading: true }

        case POST_SUCCESS:
            return { ...state, isLoading: false, }

        case POST_FAILED:
            return { ...state, isLoading: false, isError: true }

        case PATCH_REQUEST:
            return { ...state, isLoading: true }

        case PATCH_SUCCESS:
            return { ...state, isLoading: false, }

        case PATCH_FAILED:
            return { ...state, isLoading: false, isError: true }

        case DELETE_REQUEST:
            return { ...state, isLoading: true }

        case DELETE_SUCCESS:
            return { ...state, isLoading: false, }

        case DELETE_FAILED:
            return { ...state, isLoading: false, isError: true }

        default:
            return state;
    }

}