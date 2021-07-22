import { GET_BRACELETS_FAIL, GET_BRACELETS_REQ,GET_BRACELETS_SUC, GET_EARRINGS_FAIL, GET_EARRINGS_REQ, GET_EARRINGS_SUC, GET_INDIVIDUAL_FAIL, GET_INDIVIDUAL_REQ, GET_INDIVIDUAL_SUC, GET_NECKPIECE_FAIL, GET_NECKPIECE_REQ, GET_NECKPIECE_SUC, GET_RINGS_FAIL, GET_RINGS_REQ, GET_RINGS_SUC } from "./ActionType"


const init = {
    isLoading:false,
    isError:false,
    earrings:null,
    rings: null,
    neckpiece: null,
    bracelet: null,
    individual: null
}
export const productReducer=(state=init,action)=>{
    switch (action.type) {
        case GET_EARRINGS_REQ:
            return{
                ...state,
                isLoading:true
            }
        case GET_RINGS_REQ:
            return{
                ...state,
                isLoading:true
            }
        case GET_NECKPIECE_REQ:
            return{
                ...state,
                isLoading:true
            }
        case GET_BRACELETS_REQ:
            return{
                ...state,
                isLoading:true
            }
        case GET_EARRINGS_SUC:
            return{
                ...state,
                isLoading:false,
                earrings:action.payload
            }
        case GET_RINGS_SUC:
            return{
                ...state,
                isLoading:false,
                rings:action.payload
            }
        case GET_NECKPIECE_SUC:
            return{
                ...state,
                isLoading:false,
                neckpiece:action.payload
            }
        case GET_BRACELETS_SUC:
            return{
                ...state,
                isLoading:false,
                bracelet:action.payload
            }
        case GET_INDIVIDUAL_SUC:
            return{
                ...state,
                isLoading:false,
                individual:action.payload
            }
        case GET_EARRINGS_FAIL:
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        case GET_RINGS_FAIL:
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        case GET_NECKPIECE_FAIL:
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        case GET_BRACELETS_FAIL:
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        case GET_INDIVIDUAL_REQ:
            return{
                ...state,
                isLoading:true
            }
        case GET_INDIVIDUAL_FAIL:
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        default:
            return state;
    }
}