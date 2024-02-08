import { useState, useEffect } from "react";
import { Button } from "../../common/Button";
import { Popup } from "../../common/Popup";
import { Form } from "../../common/Form";

export function EditUserPopup({isOpen, onEdit, onClose, initialUserData}) {
  const [formFields, setFormFields] = useState({
    name: '',
    surname: '',
    age: '',
  });

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
