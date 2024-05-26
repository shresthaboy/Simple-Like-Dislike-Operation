import React from "react";
import { useState } from "react";

const Assignment = () => {
  const [person, setPerson] = useState({
    name: "",
    age: '',
  });

  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");

  const handleSubmit1 = () => {
    if(newName==="" || newAge===""){
        alert("Please enter something!")
    }
    const newPerson = {
      name: newName,
      age: newAge,
    };
    setPerson(newPerson);
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setNewAge(e.target.value);
  };


  const [person2, setPerson2]= useState({
    name:'',
    age:''
  })

  const[form2Name, setform2Name] = useState("")
  const[form2Age, setform2Age] = useState("")

  const handleSubmit2=()=>{
    if(form2Name==="" || form2Age===""){
        alert("Kuch toh dalo bhai!")
    }
    const newPerson2 = {
        name: form2Name,
        age: form2Age
    }
    setPerson2(newPerson2);
  }

  const handleform2NameChange=(e)=>{
    setform2Name(e.target.value);
  }

  const handleform2AgeChange = (e)=>{
    setform2Age(e.target.value);
  }


  const AgeComparison = ()=>{
    if(person.age > person2.age && person.name.length === 3 || person2.name.length === 3){
        console.log(`${person.name}` + "is greater than" + `${person2.name}`);
       
    }else{
        console.log(`${person.name}`+ "is smaller than" + `${person2.name}`)
    }
  }


  return (
    <div>
      <h1>Form-1</h1>
      <form action="">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          value={newName}
          onChange={handleNameChange}
        />
        <br />
        <br />

        <label htmlFor="age">Age: </label>
        <input
          type="number"
          name="age"
          value={newAge}
          onChange={handleAgeChange}
        />
        <br />
        <br />
      </form>
      <button onClick={handleSubmit1}>Submit-1</button>
      <h1>
        {person.name} & {person.age}
      </h1>
      <hr />
      <h1>Form-2</h1>
      <form action="">
        <label htmlFor="name">Name-1: </label>
        <input type="text" name="Name" value={form2Name} onChange={handleform2NameChange}/><br /><br />

        <label htmlFor="age">Age-1: </label>
        <input type="number" name="Age" value={form2Age} onChange={handleform2AgeChange}/>
      </form><br />
      <button onClick={handleSubmit2}>Submit-2</button>
      <h1>{person2.name} & {person2.age}</h1>

      <button onClick={AgeComparison}>Comparator</button>
      <h1></h1>
    </div>
  );
};

export default Assignment;
