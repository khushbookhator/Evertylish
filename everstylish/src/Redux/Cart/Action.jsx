import { ADD_TO_CART, REMOVE_FROM_CART } from "./ActionType"
import axios from "axios"



export const addToCart =(id, qty)=> async(dispatch) => {
    const {data} = await axios.get(`/api/products/${id}`)

    dispatch({
        type: ADD_TO_CART,
        payload: {
            product: data._id,
            name: data.description,
            imageUrl: data.imageUrl,
            price: data.new_price,
            qty
        }
    })
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
} 

export const removeFromCart = (id) =>(dispatch, getState) => {
    dispatch({
        type: REMOVE_FROM_CART,
        payload: id
    })
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}

// const addToCart =(id, qty)=>{
//     return{
//         type:GET_DATA_REQ
//     }
// } 

// const getProductSuc =(payload)=>{
//     return{
//         type:GET_DATA_SUC,
//         payload:payload
//     }
// } 
// const getProductfail =(err)=>{
//     return{
//         type:GET_DATA_FAIL,
//         payload:err
//     }
// } 

// export const productDetails=()=>(dispatch)=>{
//     dispatch(getProductReq())
//     return axios.get("https://k-books.herokuapp.com/jewellery").then((res)=>dispatch(getProductSuc(res.data)))
//     .catch(err=>dispatch(getProductfail(err)))
// } 

