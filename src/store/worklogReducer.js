const defaultState = {
    worklog: []
}

const ADD_MANY_WORKLOG = "ADD_MANY_WORKLOG";

export const worklogReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MANY_WORKLOG:
            return { ...state, worklog: [...action.payload] }
        default: return state
    }
}

export const addManyWorklogAction = (payload) => ({ type: ADD_MANY_WORKLOG, payload })