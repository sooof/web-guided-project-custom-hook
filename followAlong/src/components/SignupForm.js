import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import Button from "../theme/Button";
import useForm from './../hooks/useForm';
import useLocalStorage from './../hooks/useLocalStorage';

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

const initialState = {
  firstName:"", 
  lastName:"",
  email: ""
};
// //Custom hook for a form:
// //1. make a function called useForm.
// //2. identify and move into useForm ALL stateful logic.
// //3. return all values needed in SignupForm from useForm.
// //4. Replace useState statement with useForm
// const useForm = (initialState) => {
//   const [values, setValues] = useState(initialState);

//   const handleChanges = e => {
//     // setValues(e.target.value);
//     setValues({
//       ...values,
//       [e.target.name]: e.target.value
//     })
//   };

//   const clearForm = e => {
//     e.preventDefault();
//     // setValues("");
//     setValues(initialState);
//   };

//   return [values, clearForm, handleChanges];
// }

export default function SignupForm() {
  const classes = useStyles();
  // const [firstName, setFirstName] = useState("");
  // const [values, clearForm, handleChanges] = useForm({
  //   firstName:"allison", 
  //   lastName:"longmire",
  //   email: "w@gmail.com"
  // });
  const [values, clearForm, handleChanges] = useForm(initialState);
  console.log(values);

  const [name, setName] = useLocalStorage("name", "Warren");


  // const handleChanges = e => {
  //   setFirstName(e.target.value);
  // };

  const handleSubmit = e => {
    e.preventDefault();
    // alert(firstName);
    alert(`${values.firstName} ${values.lastName} : ${values.email}`);
  };

  // const clearForm = e => {
  //   e.preventDefault();
  //   setFirstName("");
  // };

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