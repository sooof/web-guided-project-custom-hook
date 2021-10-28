import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import useForm from '../hooks/useForm';


import Button from "../theme/Button";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
}));


const initialValues = {
  firstName:"", 
  lastName: "", 
  email:""
  // In console 
  // localStorage.setItem("todo", JSON.stringify({task: "adfas", id:1212}))
  //localStorage.setItem("name", "Warren")
  //localStorage.getItem("lastname")
  //localStorage.removeItem('name')
  
  // firstName: localStorage.getItem('name'), 
  // lastName: localStorage.getItem("lastname"), 
  // email:""
}


const useLocalStorage = (key, initialValue) => {
  //1. When we initialize state, see if a value exists inside of localStorage.
  //2. if a value exists in localStorage, set state to that value.
  //3. if a value does not exist in localStorage, set state to initialValue and set localStorage to initialValue
  //4. Any time we save to state, save to localStorage.
  const [value, setValue] = useState( () => {
    return value;
  });
  return [value, setValue]
}

export default function SignupForm() {
  const classes = useStyles();
 
  // const [firstName, handleChanges, clearForm] = useForm("")
  // const [lastName, handleChanges, clearForm] = useForm("")
  
   const [values, handleChanges, clearForm] = useForm(initialValues)
   //const [name, setName] = useState( "Warren");
   const [name, setName] = useLocalStorage( "Warren");

  //  console.log("SignupForm", values);
  //  console.log("SignupForm", values.firstName);

  const handleSubmit = e => {
    e.preventDefault();
    alert(`${values.firstName}, ${values.lastName}, ${values.email}`);
  };
  console.log("SignupForm == ", values);


  return (
    <div p={2} className="form">
            <h3>{name}</h3>
      <button onClick={()=> {
        setName("AllisChrison");
      }}>Change Name</button>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add New Client</legend>
          <TextField
            id="outlined-name"
            label="First Name"
            className={classes.textField}
            name="firstName"
            value={values.firstName}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Last Name"
            className={classes.textField}
            name="lastName"
            value={values.lastName}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Email"
            className={classes.textField}
            name="email"
            value={values.email}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
          <div className="flexer">
            <Button color="red" onClick={clearForm}>
              Clear
            </Button>
            <Button color="blue" type="submit">
              Submit
            </Button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}