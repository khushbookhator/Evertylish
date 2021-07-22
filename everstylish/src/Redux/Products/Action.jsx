import { GET_EARRINGS_FAIL, GET_EARRINGS_REQ, GET_EARRINGS_SUC } from "./ActionType"
import axios from "axios"

//EARRINGS
const getEarringReq =()=>{
    return{
        type:GET_EARRINGS_REQ
    }
} 

const getEarringSuc =(payload)=>{
    return{
        type:GET_EARRINGS_SUC,
        payload:payload
    }
} 
const getEarringfail =(err)=>{
    return{
        type:GET_EARRINGS_FAIL,
        payload:err
    }
} 

export const earringsDeatils=()=>(dispatch)=>{
    dispatch(getEarringReq())
    return axios.get("http://localhost:1107/api/products/all/earrings").then((res)=>dispatch(getEarringSuc(res.data.data)))
    .catch(err=>dispatch(getEarringfail(err)))
} 

//RINGS
//NECKPIECE
//BRACELETS

