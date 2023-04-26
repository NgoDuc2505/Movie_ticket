const defaultInitial = {
    price: 1000,
    locate: 'A2',
    cartSeat:[],
    priceArr:[],
};

export const chooseReducer = (state = defaultInitial ,action)=>{
    switch (action.type) {
        case 'set_status':
            let newCartSeat = [...state.cartSeat];
            if(state.cartSeat.includes(action.payload.seatId)){
               let indexDelete = (state.cartSeat.indexOf(action.payload.seatId));
               newCartSeat.splice(indexDelete,1);
               state.priceArr.splice(indexDelete,1)
               return{
                    ...state,
                    cartSeat: [...newCartSeat],
                    priceArr:[...state.priceArr],
               }
            }else{
                return {
                 ...state,
                 locate: action.payload,
                 cartSeat:[...state.cartSeat,action.payload.seatId],
                 priceArr:[...state.priceArr,action.payload.price]
                }
            }
        case 'delete':
            state.cartSeat.splice(action.payload,1);
            state.priceArr.splice(action.payload,1);
            return {
                ...state,
                cartSeat:[...state.cartSeat],
                priceArr:[...state.priceArr],
            }
        case 'cacel':
            state.cartSeat =[];
            state.priceArr=[];
            return{
                ...state,
                cartSeat:[...state.cartSeat],
                priceArr:[...state.priceArr],
            }
        default:
            break;
    }
    return state;
}