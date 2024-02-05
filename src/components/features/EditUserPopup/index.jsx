import { useState, useEffect } from "react";
import { Button } from "../../common/Button";
import { Popup } from "../../common/Popup";
import { Form } from "../../common/Form";

export function EditUserPopup({isOpen, onEdit, onClose, initialUserData}) {
  //I left it for discution (description below)
  // console.log(initialUserData);
  const [formFields, setFormFields] = useState({
    name: '',
    surname: '',
    age: '',
  });
  // I stole it from chatgpt and understand how it works but I still can't understand why it didn't work when I was trying to put initialUserData directly to formFields(setFormFields). I notice that on first load it says that initialUserData is undefined but why.... I thought only when I click on the button edit it will run this component. 
  useEffect(() => {
    if (initialUserData) {
      setFormFields({
        name: initialUserData.name || '',
        surname: initialUserData.surname || '',
        age: initialUserData.age || '',
      });
    }
  }, [initialUserData]);
  
  function onChangeInput(fieldName, value) {
    setFormFields(prevValue => {
      return {
        ...prevValue,
        [fieldName]: value,
      }
    });
  }

// 1. Validation
// 2. if validation fails error
// 3. send data to page
// 4. Clear form
    function onSubmit() {
      if (formFields.name === '' || formFields.surname === '' || formFields.age === '') {
        alert('You should fill in all fields!')
        return
      }

      onEdit(formFields, initialUserData.id);
      onClose();

      setFormFields({
        name: '',
        surname: '',
        age: '',
      })
    }

  return (
    <Popup isOpen={isOpen}>
      <h1>Edit user</h1>
      <Form onChangeInput={onChangeInput} formFields={formFields}/>
      <div className="button-group">
        <Button text="Edit" onClick={onSubmit}/>
        <Button text="Cancel" onClick={onClose}/>
      </div>
    </Popup>
  )
}
