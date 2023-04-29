import { configureStore } from "@reduxjs/toolkit";
import AdsSlice from "./Slice";

const store = configureStore({
    reducer: {
        search: AdsSlice,               //nameing the AdsSlice as search that will be used in useSelector hook
    },
});

export default store;