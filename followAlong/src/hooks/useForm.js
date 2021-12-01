import { useState } from "react";

//Custom hook for a form:
//1. make a function called useForm.
//2. identify and move into useForm ALL stateful logic.
//3. return all values needed in SignupForm from useForm.
//4. Replace useState statement with useForm
const useForm = (initialState) => {
    const [values, setValues] = useState(initialState);
  
    const handleChanges = e => {
      // setValues(e.target.value);
      setValues({
        ...values,
        [e.target.name]: e.target.value
      })
    };
  
    const clearForm = e => {
      e.preventDefault();
      // setValues("");
      setValues(initialState);
    };
  
    return [values, clearForm, handleChanges];
  }
  export default useForm;