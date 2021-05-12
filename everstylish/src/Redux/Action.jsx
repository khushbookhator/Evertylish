import { GET_DATA_FAIL, GET_DATA_REQ, GET_DATA_SUC } from "./ActionType"
import axios from "axios"


const getProductReq =()=>{
    return{
        type:GET_DATA_REQ
    }
} 

const getProductSuc =(payload)=>{
    return{
        type:GET_DATA_SUC,
        payload:payload
    }
} 
const getProductfail =(err)=>{
    return{
        type:GET_DATA_FAIL,
        payload:err
    }
} 

export const productDetails=()=>(dispatch)=>{
    dispatch(getProductReq())
    return axios.get("https://k-books.herokuapp.com/jewellery").then((res)=>dispatch(getProductSuc(res.data)))
    .catch(err=>dispatch(getProductfail(err)))
} 

