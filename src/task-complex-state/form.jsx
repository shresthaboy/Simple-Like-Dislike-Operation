import React from 'react';


const Form = ({name,setName,age,setAge,submitresults}) => {

    const nameChange = (e)=>{
        setName(e.target.value);
    }
    const ageChange = (e) =>{
        setAge(e.target.value);
    }
    
    return (
        <div>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" value={name} onChange={nameChange}/>

            <label htmlFor="age">Age: </label>
            <input type="number" name="age" value={age} onChange={ageChange}/>

            <button onClick={submitresults}>Submit</button>

        </div>
    );
}

export default Form;
