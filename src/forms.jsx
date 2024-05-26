import React from "react";
import { useState } from "react";

const Forms = () => {
  const [person, setPerson] = useState({
    name: "",
    gender: "",
  });

  // now we need to update values to the name and gender field but before that lets set their values with
  // the newName and newGender state variables
  const [newName, setNewName] = useState("");
  const [newGender, setNewGender] = useState("");

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };
  const handleGenderChange = (e) => {
    setNewGender(e.target.value);
  };

  const handleSubmit = () => {
    const newPerson = {
      name: newName,
      gender: newGender,
    };
    setPerson(newPerson);
  };

  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        name="name"
        value={newName}
        onChange={handleNameChange}
      />
      <br />
      <br />
      <label htmlFor="gender">Gender: </label>
      <input
        type="text"
        name="gender"
        value={newGender}
        onChange={handleGenderChange}
      /><br /><br />
      <button onClick={handleSubmit}>Submit</button>

      <h1>{person.name}</h1>
      <h1>{person.gender}</h1>
    </div>
  );
};

export default Forms;
