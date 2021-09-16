import { mockFetch } from "../data/mock-fetch"
import { addManyCustomerAction } from "../store/customerReducer"
import { addManyWorklogAction } from "../store/worklogReducer"

export const fetchCustomers = () => {
    return function (dispatch) {
        mockFetch('/api/employees').then(data => dispatch(addManyCustomerAction(data)))
    }
}

export const fetchWorklog = () => {
    return function (dispatch) {
        mockFetch('/api/employees/worklog').then(data => dispatch(addManyWorklogAction(data)))
    }
}