import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser, getUsers } from "../../redux/actions";
import EditUser from "../EditUser";
import "./Card.css"
const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h3> {user.name} </h3>
      <h3> {user.email} </h3>
      <h3> {user.phone} </h3>
      <div>
        <button className="button"
          onClick={() => {
            dispatch(deleteUser(user._id));
            dispatch(getUsers());
          }}
        >
          DELETE
        </button>
        <EditUser user={user}/>
      </div>
    </div>
  );
};

export default UserCard;
