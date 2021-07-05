import React, { useState } from "react";

import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const AddUser = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const reset = () => {
    setName('');
    setEmail('');
    setPhone('');
  };

  const handleAdd =() => {
      dispatch(addUser (name,email,phone));
      reset();
      closeModal(); 
    };
  
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button className="button" onClick={openModal}>ADD</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <form onSubmit={(e) => e.preventDefault()}>
          <label> name </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label> email </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label> phone </label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button onClick={handleAdd}>Confirm</button>
          <button onClick={closeModal} >Cancel</button>
        </form>
      </Modal>
    </div>
  ); 
};

export default AddUser;
