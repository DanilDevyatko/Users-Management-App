import { Table } from "../../common/Table"
import { Button } from "../../common/Button"
import { AddUserPopup } from "../../features/AddUserPopup";
import { useState } from "react";

function App() {
  const [usersList, setUsersList] = useState([
    {
      id: 1,
      name: 'Danil',
      surname: 'Deviatko',
      age: 25,
    },
    {
      id: 2,
      name: 'Maksim',
      surname: 'Derskiy',
      age: 24,
    }
  ]);

  const [isAddNewUserPopupOpen, setisAddNewUserPopupOpen] = useState(false);

  

  function toggleAddUserPopupOpen() {
    setisAddNewUserPopupOpen(prevStatus => !prevStatus)
  } 

  function addNewUser(newUserObject) {
    const lastObject = usersList.length - 1;
    const lastObjectId = usersList[lastObject].id;
    const newId = lastObjectId + 1;
    
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
        text={isAddNewUserPopupOpen ? 'Close' : 'Add new user +'}
        onClick={toggleAddUserPopupOpen}
      />
      <Table usersList={usersList}/>
      <AddUserPopup 
        isOpen={isAddNewUserPopupOpen}
        onAdd={addNewUser}
        onClose={toggleAddUserPopupOpen}
      />
    </>
  )
}

export default App
