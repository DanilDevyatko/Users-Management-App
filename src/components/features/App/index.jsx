import { Table } from "../../common/Table"
import { Button } from "../../common/Button"
import { Form } from "../../common/Form";
import { useState } from "react";

function App() {
  const [usersList, setUsersList] = useState([
    {
      id: '1',
      name: 'Danil',
      surname: 'Deviatko',
      age: '25',
    },
    {
      id: '2',
      name: 'Maksim',
      surname: 'Derskiy',
      age: '24',
    }
  ]);
  const [buttonText, setButtonText] = useState("Add User +");

  function handleButtonClick() {
    buttonText === 'Close' ? setButtonText('Add User +') : setButtonText('Close');
    document.querySelector('.form').classList.toggle("active");
  }

  function AddNewUser(newUserObject) {
    const lastObject = usersList.length - 1;
    const lastObjectId = usersList[lastObject].id;
    const newId = +lastObjectId + 1;
    
    const newUser = {
      ...newUserObject,
      id: newId,
    };

    setUsersList((prevList) => [
      ...prevList,
      newUser,
    ]);
  }

  return (
    <>
      <Button 
        text={buttonText} 
        onClick={handleButtonClick}
      />
      <Table usersList={usersList}/>
      <Form AddNewUser={AddNewUser} handleButtonClick={handleButtonClick}/>
    </>
  )
}

export default App
