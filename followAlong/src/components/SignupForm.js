import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

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
}

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
    setValues("");
  };

  return ([values, handleChanges, clearForm]);
}
 

export default function SignupForm() {
  const classes = useStyles();
 
  // const [firstName, handleChanges, clearForm] = useForm("")
  // const [lastName, handleChanges, clearForm] = useForm("")
  
   const [values, handleChanges, clearForm] = useForm(initialValues)

   console.log("SignupForm", values);
   console.log("SignupForm", values.firstName);

  const handleSubmit = e => {
    e.preventDefault();
    alert(`${values.firstName}, ${values.lastName}, ${values.email}`);
  };
  console.log("SignupForm == ", values);


  return (
    <div p={2} className="form">
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