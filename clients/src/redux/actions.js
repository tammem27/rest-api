import axios from "axios"
import { ADD, DELETE, EDIT, GET } from "./actionTypes"

export const getUsers =() => async (dispatch) => {
    try {
        let res = await axios.get("/users/get")
        dispatch({
            type:GET,
            payload:res.data
        })
    } catch (error) {
        alert ("get error")
    }
};

export const deleteUser = (id) => async (dispatch) =>{
    try {
        let {data} =await axios.delete(`/users/delete/${id}`)
        dispatch({
            type:DELETE,
            payload:data
        })
    } catch (error) {
        alert("delete error")
        
    }
};
export const addUser = (name,email,phone) => async (dispatch) =>{
    try {
        const newUser ={
            name,
            email,
            phone,
        };
        let res = await axios.post('/users/add',newUser);
        dispatch({
            type:ADD,
            payload:res.data,
        });
    } catch (error) {
        alert("add error");
        
    }
};
export const editUser =  (id,name,email,phone) => async (dispatch) =>{
    try {
        const editedUser ={
            name,
            email,
            phone,
        };
        let res = await axios.put(`/users/edit/${id}`,editedUser);
        dispatch({
            type:EDIT,
            payload:res.data,
        });
    } catch (error) {
        alert("edit error");
        
    }
}
   

