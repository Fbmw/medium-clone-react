const defaultState = {
    appName: '',
    modalMode:false
}

export default (state = defaultState, action)=>{
    switch (action.type) {
        case 'TOOGLE_MODEL':
            return{
                ...state,
                modalMode: action.modalMode
            }
        default:
           return state
    }
};