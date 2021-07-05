import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../redux/actions';
import UserCard from '../userCard/UserCard';

const UserList = () => {
    const {loading,users} = useSelector(state => state);
    const dispatch = useDispatch()
    
    useEffect(() => {
       dispatch(getUsers());
    }, [dispatch])

    return (
        <div>
            {loading 
            ? (<h1>loading...</h1>)
             : (
            <div>
            { users.map((user,i)=>
                    <UserCard user={user} key={i}/>
             )}
             </div>
             )}
        </div>
    )}

    export default   UserList;
