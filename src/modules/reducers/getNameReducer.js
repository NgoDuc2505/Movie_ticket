const defaultName = ''
export const userNameReducer = (state = defaultName, action) => {
    switch (action.type) {
        case 'get_name':
            state = action.payload;
            return state;
        case 'cacel':
            state ='';
            return state;
        default:
            break;
    }
    return state;
}