import {createSlice, configureStore} from '@reduxjs/toolkit'

const  cartViewDefault = {
     toShow : false,
}

const cartOrdersDefault = {
    ordersArray : [],
}

const orderSlice = createSlice({
    name: 'orderSlice',
    initialState: cartOrdersDefault,
    reducers: {
        addToCart(state,action){

            
            const {title, price , id} = action.payload;
            const existingOrderIndex = state.ordersArray.findIndex(order => order.id === id);

             if(existingOrderIndex !== -1){
                state.ordersArray[existingOrderIndex].quantity +=1;
                state.ordersArray[existingOrderIndex].total += price;
             }

             else{
                const order = {
                     title,
                     price,
                     id,
                     quantity : 1,
                     total: price,
    
                }
                state.ordersArray = [...state.ordersArray, order];
              
             }

            // console.log(state.ordersArray);

             

        },

        decreaseCount(state, action){
             const  indexToDecrease = state.ordersArray.findIndex((order)  => order.id === action.payload);
              
             

              if(state.ordersArray[indexToDecrease].quantity === 1){
                   state.ordersArray.splice(indexToDecrease, 1);
              }
              else{
                state.ordersArray[indexToDecrease].quantity -=1;
                 state.ordersArray[indexToDecrease].total -= state.ordersArray[indexToDecrease].price;

              }

              

        },

        increaseCount(state, action){
            const  indexToIncrease = state.ordersArray.findIndex((order)  => order.id === action.payload);
            state.ordersArray[indexToIncrease].quantity +=1;
            state.ordersArray[indexToIncrease].total += state.ordersArray[indexToIncrease].price;
            
        }
    }
})

const CartSlice = createSlice({
     name : 'cartView',
     initialState : cartViewDefault,
     reducers : {
        toggleCart(state){
            state.toShow = !state.toShow;
        }
     }
})


const store = configureStore({
    reducer : {cartView : CartSlice.reducer, orderSlice : orderSlice.reducer}
})

export const cartActions = CartSlice.actions;
export const orderActions= orderSlice.actions;

export default store;