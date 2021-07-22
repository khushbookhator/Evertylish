import { GET_BRACELETS_FAIL, GET_BRACELETS_REQ, GET_BRACELETS_SUC, GET_EARRINGS_FAIL, GET_EARRINGS_REQ, GET_EARRINGS_SUC, GET_INDIVIDUAL_FAIL, GET_INDIVIDUAL_REQ, GET_INDIVIDUAL_SUC, GET_NECKPIECE_FAIL, GET_NECKPIECE_REQ, GET_NECKPIECE_SUC, GET_RINGS_FAIL, GET_RINGS_REQ, GET_RINGS_SUC } from "./ActionType"
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

const getRingsReq =()=>{
    return{
        type:GET_RINGS_REQ
    }
} 

const getRingsSuc =(payload)=>{
    return{
        type:GET_RINGS_SUC,
        payload:payload
    }
} 
const getRingsfail =(err)=>{
    return{
        type:GET_RINGS_FAIL,
        payload:err
    }
} 

export const ringsDetails=()=>(dispatch)=>{
    dispatch(getRingsReq())
    return axios.get("http://localhost:1107/api/products/all/rings").then((res)=>dispatch(getRingsSuc(res.data.data)))
    .catch(err=>dispatch(getRingsfail(err)))
}

//NECKPIECE
const getNeckpieceReq =()=>{
    return{
        type:GET_NECKPIECE_REQ
    }
} 

const getNeckpieceSuc =(payload)=>{
    return{
        type:GET_NECKPIECE_SUC,
        payload:payload
    }
} 
const getNeckpiecefail =(err)=>{
    return{
        type:GET_NECKPIECE_FAIL,
        payload:err
    }
} 

export const neckpieceDetails=()=>(dispatch)=>{
    dispatch(getNeckpieceReq())
    return axios.get("http://localhost:1107/api/products/all/neckpiece").then((res)=>dispatch(getNeckpieceSuc(res.data.data)))
    .catch(err=>dispatch(getNeckpiecefail(err)))
}


//BRACELETS
const getBraceletsReq =()=>{
    return{
        type:GET_BRACELETS_REQ
    }
} 

const getBraceletsSuc =(payload)=>{
    return{
        type:GET_BRACELETS_SUC,
        payload:payload
    }
} 
const getBraceletsfail =(err)=>{
    return{
        type:GET_BRACELETS_FAIL,
        payload:err
    }
} 

export const braceletsDetails=()=>(dispatch)=>{
    dispatch(getBraceletsReq())
    return axios.get("http://localhost:1107/api/products/all/bracelet").then((res)=>dispatch(getBraceletsSuc(res.data.data)))
    .catch(err=>dispatch(getBraceletsfail(err)))
}

//INDIVIDUAL ITEM
const getIndividualReq =()=>{
    return{
        type:GET_INDIVIDUAL_REQ
    }
} 

const getIndividualSuc =(payload)=>{
    return{
        type:GET_INDIVIDUAL_SUC,
        payload:payload
    }
} 
const getIndividualfail =(err)=>{
    return{
        type:GET_INDIVIDUAL_FAIL,
        payload:err
    }
} 

export const individualDetails=(id)=>(dispatch)=>{
    dispatch(getIndividualReq())
    return axios.get(`http://localhost:1107/api/products/${id}`).then((res)=>dispatch(getIndividualSuc(res.data)))
    .catch(err=>dispatch(getIndividualfail(err)))
}
