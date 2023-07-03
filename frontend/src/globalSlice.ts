import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { createAction } from '@reduxjs/toolkit';

export const manualAction = createAction('YOUR_ACTION_TYPE', (itemCode, quantity) => ({
  payload: { itemCode, quantity },
}));

const globalSlice1 = createSlice({
    name: "cartCount",
    initialState: "0",
    reducers: {
        setCartCount: (state, action) => {
            return action.payload;
        }
    }
});

  interface State {
    cartItems: CartDetails[];
  }

  type CartDetails = {
    itemCode: string,
    itemImage: string,
    itemName: string,
    unitPrice: string,
    quantity: number
  }

  const initialState: State = {
      cartItems: []
  };

const globalSlice2 = createSlice({
    name: "cartItems",
    initialState: initialState,
    reducers: {
        setCartItems: (state, action: PayloadAction<any>) => {
            // For pusing existing items
            let itemCode = action.payload.itemCode;
            let index = state.cartItems.findIndex((item) => item.itemCode == itemCode);
            if(index !== -1){
              state.cartItems[index] = action.payload;
            }else {
              //For pushing new items
              state.cartItems.push(action.payload);
            }
        },

        addNewCartItems: (state, action) => {
          let itemCode = action.payload.itemCode;
          let index = state.cartItems.findIndex((item) => item.itemCode == itemCode);
          if(index !== -1){
            state.cartItems[index].quantity = state.cartItems[index].quantity + action.payload.quantity;
          } else {
            //For pushing new items
            state.cartItems.push(action.payload);
          }
        },

        removeFromCart: (state, action) => {
            let itemCode = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.itemCode !== itemCode);
        },

        removeAllCartItems: (state) => {
            state.cartItems = [];
        },

        searchCartItem: (state, action) => {
            let itemCode = action.payload;
            let item = state.cartItems.find((item) => item.itemCode == itemCode);
            localStorage.setItem("searchCartItem", JSON.stringify(item));
        },

        // searchItemAndUpdateQuantity: (state, action) => {
        //     if(manualAction.type){
        //         const { itemCode, quantity } = action.payload;
        //     const updatedItems = state.cartItems.map((item) => {
        //         if (item.itemCode == itemCode) {
        //             return {
        //                 ...item,
        //                 quantity: quantity,
        //             };
        //         }
        //         return item;
        //     });

        //     console.log(updatedItems);
            
        //     state.cartItems = updatedItems;
        //     }
        // }

        yourReducer: (state: any, action: any) => {
            switch (action.type) {
              case manualAction.type:
                const { itemCode, quantity } = action.payload;
                const updatedItems = state.cartItems.map((item: CartDetails) => {
                  if (item.itemCode === itemCode) {
                    return {
                      ...item,
                      quantity: quantity,
                    };
                  }
                  return item;
                });
          
                console.log(updatedItems);
                
                state.cartItems = updatedItems;
                break;
          
              // Other cases...
          
              default:
                // Handle default case if needed
                break;
            }
          }
    }
});
  

export const { setCartCount }  = globalSlice1.actions;
export const { setCartItems,addNewCartItems, removeFromCart, removeAllCartItems, yourReducer,searchCartItem }  = globalSlice2.actions;
export const globalSlice1Reducer = globalSlice1.reducer;
export const globalSlice2Reducer  = globalSlice2.reducer;
export default CartDetails;