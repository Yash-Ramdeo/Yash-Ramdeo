import { createSlice } from "@reduxjs/toolkit";

const AdsSlice = createSlice({
    name: "searchADs",
    initialState: "",                           //initialState which an empty string 
    reducers: {
        addString(state, action) {
            return action.payload;              //updating the initialState with the keyword dispatched 
        },                                      //from search box
    }
})

export default AdsSlice.reducer;
export const { addString } = AdsSlice.actions;