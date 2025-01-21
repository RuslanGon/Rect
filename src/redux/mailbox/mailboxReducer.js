const INITAL_STATE = {
    users: [],
    filter: ''
}

export const mailboxReducer = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case 'mailbox/ADD_USER': {
            return {
                ...state,
                users: [...state.users, action.payload] 
            };
        }
        case 'mailbox/DELETE_USER': {
            return { 
                ...state,
                users: state.users.filter(user => user.id !== action.payload)
            };
        }
        default: 
            return state;
    }

}