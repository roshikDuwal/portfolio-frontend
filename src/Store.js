import {configureStore} from "@reduxjs/toolkit"
import { LoginReducer, UpdateReducer, UserReducer } from "./reducer/User"

export const store=configureStore({
    reducer:{
        user:UserReducer,
        login:LoginReducer,
        update:UpdateReducer,
    }
})