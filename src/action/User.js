import axios from "axios"
import { server } from "../main"

export const getUser = () => async (dispatch) => {
    try {

        dispatch({
            type: "GET_USER_REQUEST"
        })
        const { data } = await axios.get(`${server}/api/v1/user`,{
            withCredentials:true
        })

        dispatch({
            type: "GET_USER_SUCCESS",
            payload: data.user
        })

    } catch (error) {
        dispatch({
            type: "GET_USER_FAILURE",
            payload: error.response.data.message
        })
    }
}

export const login = (email, password) => async (dispatch) => {
    try {

        dispatch({
            type: "LOGIN_REQUEST"
        })

        const { data } = await axios.post(`${server}/api/v1/login`, {
            email,
            password
        }, {
            withCredentials:true,
            headers: {
                "Content-Type": "application/json"
            }
        })



        dispatch({
            type: "LOGIN_SUCCESS",
            payload: data.message
        })

    } catch (error) {

        dispatch({
            type: "LOGIN_FAILURE",
            payload: error.response.data.message
        })
    }
}

export const logout = () => async (dispatch) => {
    try {

        dispatch({
            type: "LOGOUT_REQUEST"
        })
        const { data } = await axios.get(`${server}/api/v1/logout`,{
            withCredentials:true
        })

        dispatch({
            type: "LOGOUT_SUCCESS",
            payload: data.message
        })

    } catch (error) {
        dispatch({
            type: "LOGOUT_FAILURE",
            payload: error.response.data.message
        })
    }
}

export const loadUser = () => async (dispatch) => {
    try {

        dispatch({
            type: "LOAD_USER_REQUEST"
        })
        const { data } = await axios.get(`${server}/api/v1/me`,{
            withCredentials:true
        })

        dispatch({
            type: "LOAD_USER_SUCCESS",
            payload: data.user
        })

    } catch (error) {
        dispatch({
            type: "LOAD_USER_FAILURE",
            payload: error.response.data.message
        })
    }
}

export const updateUser = (name, email, password, about) => async (dispatch) => {

    try {
        dispatch({
            type: "UPDATE_USER_REQUEST"
        });


        const { data } = await axios.put(`${server}/api/v1/admin/update`, {
            name,
            email,
            password,
            about
        }, {
            withCredentials:true,
            headers: {
                "Content-Type": "application/json"
            }
        }

        );


        dispatch({
            type: "UPDATE_USER_SUCCESS",
            payload: data.message
        })
    } catch (error) {
        dispatch({
            type: "UPDATE_USER_FAILURE",
            payload: error.response.data.message
        })
    }
}

export const addProject = (title, url, image, description, techStack) => async(dispatch) => {

    try {
        dispatch({
            type: "ADD_PROJECT_REQUEST",
        })

        

        const {data}=await axios.post(`${server}/api/v1/admin/project/add`,{
            title,
            url,
            image,
            description,
            techStack,
        },{
            withCredentials:true,
            headers:{
                "Content-Type":"application/json",
            },
        })

  
        dispatch({
            type: "ADD_PROJECT_SUCCESS",
            payload:data.message
        })

    } catch (error) {
      
        dispatch({
            type: "ADD_PROJECT_FAILURE",
            payload:error.response.data.message
        })
    }
}

export const deleteProject = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "DELETE_PROJECT_REQUEST",
        })

        const {data}=await axios.delete(`${server}/api/v1/admin/project/${id}`,{
            withCredentials:true
        })

        dispatch({
            type: "DELETE_PROJECT_SUCCESS",
            payload:data.message
        })

    } catch (error) {
        dispatch({
            type: "DELETE_PROJECT_FAILURE",
            payload:error.response.data.message
        })
    }
}

export const contactUs = (name,email,message) => async(dispatch) => {

    try {
        dispatch({
            type: "CONTACT_US_REQUEST",
        })

        const {data}=await axios.post(`${server}/api/v1/contact`,{
            name,email,message
        },{
            withCredentials:true,
            headers:{
                "Content-Type":"application/json",
            },
        })

  
        dispatch({
            type: "CONTACT_US_SUCCESS",
            payload:data.message
        })

    } catch (error) {
        dispatch({
            type: "CONTACT_US_FAILURE",
            payload:error.response.data.message
        })
    }
}
