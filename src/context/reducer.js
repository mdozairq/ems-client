import { FETCH_EMPLOYEE_LIST } from "../constants/actionTypes";

export const initialState = {
    data: null
}

export const employeeStoreReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case FETCH_EMPLOYEE_LIST:
            return {
                ...state,
                data: payload,
            };
        default:
            return state;
    }
};