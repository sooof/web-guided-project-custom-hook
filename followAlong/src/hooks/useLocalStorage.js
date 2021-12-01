import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    //1. when assigning initialState, check to see if a localStorage value exists.
    //2. If a localStorage value exists, make that our initial value
    //3. If a localStorage value does NOT exist, put initialValue into localStorage.
    //4. Any time we set state, also set localStorage  
    const [value, setValue] = useState(()=> {
      if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key));
      } else {
        localStorage.setItem(key, JSON.stringify(initialValue));
        return(initialValue);
      }
    });
  
    const setStoredValue = (value)=> {
      localStorage.setItem(key, JSON.stringify(value));
      setValue(value);
    }
  
    return [value, setStoredValue];
}

export default useLocalStorage;