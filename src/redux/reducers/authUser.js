const initialState = {
    user: {},
    isAuth: false,
    profile: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                isAuth: Object.keys(action.user).length > 0 ? true : false,
                user: action.user
            }
        case 'FOLLOW_USER':
            return {
                ...state,
                article: action.article
            }
        case 'SET_PROFILE':
            return {
                ...state,
                article: action.profile
            }
        default:
            state
    }
}