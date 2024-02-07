import { Table } from "../../common/Table"
import { Button } from "../../common/Button"
import { EditUserPopup } from "../EditUserPopup";
import { AddUserPopup } from "../AddUserPopup";
import { DeleteUserPopup } from "../DeleteUserPopup";
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

  const [isAddNewUserPopupOpen, setIsAddNewUserPopupOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [deletingUserId, setDeletingUserId] = useState(null);

  function toggleAddUserPopupOpen() {
    setIsAddNewUserPopupOpen(prevStatus => !prevStatus)
  }

  function handleEditUser(id) {
    console.log(id);
    setEditingUser(usersList.find(user => user.id === id));
  }

  function handleCloseEdit() {
    setEditingUser(null);
  }

  function handleCloseDelete() {
    setDeletingUserId(null);
  }

  function editUser(newUserObject, id) {
    let newUsersList = usersList.map((user)=> {
      if (user.id === id) {
        return {...user, ...newUserObject}
      }
      return user;
    })
    

    setUsersList(newUsersList);
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

  function deleteUser() {
    const newUsersList = usersList.filter((user) => user.id !== deletingUser);
    setUsersList(newUsersList);
  }

  return (
    <>
      <Button 
        text={isAddNewUserPopupOpen ? 'Close' : 'Add new user +'}
        onClick={toggleAddUserPopupOpen}
      />
      <Table 
        usersList={usersList}
        onEdit={handleEditUser}
        onDelete={setDeletingUserId}
      />
      <AddUserPopup 
        isOpen={isAddNewUserPopupOpen}
        onAdd={addNewUser}
        onClose={toggleAddUserPopupOpen}
      />
      <EditUserPopup 
        isOpen={!!editingUser}
        onEdit={editUser}
        onClose={handleCloseEdit}
        initialUserData={editingUser}
      />
      <DeleteUserPopup 
        isOpen={!!deletingUserId}
        onDelete={deleteUser}
        onClose={handleCloseDelete}
      />
    </>
  )
}

export default App
