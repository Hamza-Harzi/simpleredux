import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions";

function AddUser() {
  const [newName, setNewName] = useState("");
  const dispatch = useDispatch();

  const handelChage = (e) => {
    setNewName(e.target.value);
    console.log("object :>> ", setNewName);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(newName));
  };
  return (
    <form onSubmit={handelSubmit}>
      <input onChange={handelChage} type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddUser;
