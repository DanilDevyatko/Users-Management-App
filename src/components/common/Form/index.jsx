import { useState } from "react";
import { Input } from "../Input";
import { Button } from "../Button";
import "./index.scss"

export function Form({AddNewUser, handleButtonClick}) {
  const [inputValue, setInputValue] = useState({
    name: '',
    surname: '',
    age: '',
  });

  function onChangeInput(inputIdentifier, newValue) {
    setInputValue(prevValue => {
      return {
        ...prevValue,
        [inputIdentifier]: newValue,
      }
    });
  }

  function AddUserOnClick() {
    if (inputValue.name != '' && inputValue.surname != '' && inputValue.age != '') {
      AddNewUser(inputValue);
      handleButtonClick();

      setInputValue({
        name: '',
        surname: '',
        age: '',
      })
    } else {
      alert('You should fill in all fields')
    }
  }

  return (
    <div className="form">
      <h1>Add new user</h1>
      <div>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <Input type="text" id="name" value={inputValue.name} onChage={onChangeInput}/>
        </div>
        <div className="input-group">
          <label htmlFor="surname">Surname</label>
          <Input type="text" id="surname" value={inputValue.surname} onChage={onChangeInput}/>
        </div>
        <div className="input-group">
          <label htmlFor="age">Age</label>
          <Input type="number" id="age" value={inputValue.age} onChage={onChangeInput}/>
        </div>
        <div className="button-group">
          <Button text="Add" onClick={AddUserOnClick}/>
          <Button text="Cancel" onClick={()=> {console.log('Cancel')}}/>
        </div>
      </div>
    </div>
  )
}
