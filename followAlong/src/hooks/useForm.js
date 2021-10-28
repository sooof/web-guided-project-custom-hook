import React, { useState } from "react";

const useForm = (initialValues) =>{
    //1. gather all stateful logic
    //2. return data need in component
    //3. connect our hook to our component
    // const [firstName, setFirstName] = useState(initialValues);
    const [values, setValues] = useState(initialValues);
    const handleChanges = e => {
      // setValues(e.target.value);
      // console.log("handleChange:  e.target.name=", e.target.name);
      // console.log("handleChange:  e.target.value=", e.target.value);
      setValues({
        ...values,
        [e.target.name]: e.target.value
      });
    };
    const clearForm = e => {
      e.preventDefault();
      // setValues("");
      setValues(initialValues);
    };
  
    return ([values, handleChanges, clearForm]);
  }

  export default useForm;
