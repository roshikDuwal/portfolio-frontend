import {createReducer} from "@reduxjs/toolkit"


const intitalState={
    loading:true,
}

export const UserReducer=createReducer(intitalState,{
    GET_USER_REQUEST:(state)=>{
        state.loading=true;
    },
    GET_USER_SUCCESS:(state,action)=>{
        state.loading=false;
        state.user=action.payload;
    },
    GET_USER_FAILURE:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
    },
    CLEAR_ERRORS:(state,action)=>{
        state.error=null;
    },
})

export const LoginReducer=createReducer({},{
    
    LOGIN_REQUEST:(state)=>{
        state.loading=true;
        state.isAuthenticated=false;
    },
    LOGIN_SUCCESS:(state,action)=>{
        state.loading=false;
        state.isAuthenticated=true;
        state.message=action.payload;
    },
    LOGIN_FAILURE:(state,action)=>{
        state.loading=false;
        state.isAuthenticated=false;
        state.error=action.payload;
    },

    LOGOUT_REQUEST:(state)=>{
        state.loading=true;
        state.isAuthenticated=true;
    },
    LOGOUT_SUCCESS:(state,action)=>{
        state.loading=false;
        state.isAuthenticated=false;
        state.user=null;
        state.message=action.payload;
    },
    LOGOUT_FAILURE:(state,action)=>{
        state.loading=false;
        state.isAuthenticated=true;
        state.error=action.payload;
    },


    LOAD_USER_REQUEST:(state)=>{
        state.loading=true;
        state.isAuthenticated=true;
    },
    LOAD_USER_SUCCESS:(state,action)=>{
        state.loading=false;
        state.isAuthenticated=true;
        state.user=action.payload;
    },
    LOAD_USER_FAILURE:(state,action)=>{
        state.loading=false;
        state.isAuthenticated=false;
        state.error=action.payload;
    },

    CLEAR_ERRORS:(state)=>{
        state.error=null;
    },
    CLEAR_MESSAGE:(state)=>{
        state.message=null;
    },

  
})

export const UpdateReducer=createReducer({},{
    UPDATE_USER_REQUEST:(state)=>{
        state.loading=true;
    },
    UPDATE_USER_SUCCESS:(state,action)=>{
        state.loading=false;
        state.message=action.payload;
    },
    UPDATE_USER_FAILURE:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
    },


    ADD_PROJECT_REQUEST:(state)=>{
        state.loading=true;
    },
    ADD_PROJECT_SUCCESS:(state,action)=>{
        state.loading=false;
        state.message=action.payload;
    },
    ADD_PROJECT_FAILURE:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
    },
    

    DELETE_PROJECT_REQUEST:(state)=>{
        state.loading=true;
    },
    DELETE_PROJECT_SUCCESS:(state,action)=>{
        state.loading=false;
        state.message=action.payload;
    },
    DELETE_PROJECT_FAILURE:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
    },

    CONTACT_US_REQUEST:(state)=>{
        state.loading=true;
    },
    CONTACT_US_SUCCESS:(state,action)=>{
        state.loading=false;
        state.message=action.payload;
    },
    CONTACT_US_FAILURE:(state,action)=>{
        state.loading=false;
        state.error=action.payload
    },

    CLEAR_ERRORS:(state)=>{
        state.error=null;
    },
    CLEAR_MESSAGE:(state)=>{
        state.message=null;
    },
})
