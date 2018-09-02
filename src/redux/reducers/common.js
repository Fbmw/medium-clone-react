const defaultState = {
    appName:'',
    modalMode:false
}

export default (state = defaultState, action)=>{
    switch (action.type) {
        case 'TOOGLE_MODEL':
            return{
                ...defaultState,
                modalMode: action.modalMode
            }
        default:
            state
    }
};