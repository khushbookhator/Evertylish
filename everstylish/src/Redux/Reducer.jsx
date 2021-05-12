import { GET_DATA_FAIL, GET_DATA_REQ, GET_DATA_SUC } from "./ActionType"


const init = {
    isLoading:false,
    isError:false,
    items:null,
}
export const dataReducer=(state=init,action)=>{
    switch (action.type) {
        case GET_DATA_REQ:
            return{
                ...state,
                isLoading:true
            }
        case GET_DATA_SUC:
            return{
                ...state,
                isLoading:false,
                items:action.payload
            }
        case GET_DATA_FAIL:
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        default:
            return state;
    }
}