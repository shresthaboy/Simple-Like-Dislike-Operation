import React from "react";
import { useState } from "react";
import Form from "./form";

const Task = () => {
  const [name1, setName1] = useState("");
  const [age1, setAge1] = useState("");

  const [name2, setName2] = useState("");
  const [age2, setAge2] = useState("");

  const [comparedata, setComparedData] = useState("");

  const [person1, setPerson1] = useState({
    name: "",
    age: "",
  });

  const submitresults1 = () => {
    console.log(name1, age1);

    if (name1 === "" || age1 === "") {
      return;
    }
    setPerson1({
      name: name1,
      age: age1,
    });
    setName1("");
    setAge1("");
  };

  const [person2, setPerson2] = useState({
    name: name2,
    age: age2,
  });

  const submitresults2 = () => {
    console.log(name2, age2);
    if (name2 === "" || age2 === "") {
      return;
    }
    setPerson2({
      name: name2,
      age: age2,
    });
    setName2("");
    setAge2("");
  };

  const compareAge = () => {
    if (person1.age > person2.age) {
      const diff = parseInt(person1.age) - parseInt(person2.age);
      setComparedData(
        `${person1.name} is ${diff} years older than ${person2.name}`
      );
    } else {
      const diff = parseInt(person2.age) - parseInt(person1.age);
      setComparedData(
        `${person2.name} is ${diff} years older than ${person1.name}`
      );
    }
  };

  return (
    <div>
      <h1>Forms</h1>
      <Form
        name={name1}
        setName={setName1}
        age={age1}
        setAge={setAge1}
        submitresults={submitresults1}
      />

      <Form
        name={name2}
        setName={setName2}
        age={age2}
        setAge={setAge2}
        submitresults={submitresults2}
      />

      {person1.name != "" && person2.name != "" && (
        <button onClick={compareAge}>Compare</button>
      )}
      <h1>{comparedata}</h1>
    </div>
  );
};

export default Task;
