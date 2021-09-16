const defaultState = {
    customers: []
}


const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS";


export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MANY_CUSTOMERS:
            return { ...state, customers: [...action.payload] }

        default: return state
    }
}


export const addManyCustomerAction = (payload) => ({ type: ADD_MANY_CUSTOMERS, payload })
