import { configureStore } from "@reduxjs/toolkit";
import loaderSlice from "./loaderSlice/index";
import usersSlice from "./userSlice/index";
const store = configureStore({
    reducer:{
        loader: loaderSlice,
        users:usersSlice,
    }
})
export default store;