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
  const [isEditUserPopupOpen, setIsEditUserPopupOpen] = useState(false);
  const [isDeleteUserPopupOpen, setIsDeleteUserPopupOpen] = useState(false);
  const [editingUser, setEditingUser] = useState();
  const [deletingUser, setDeletingUser] = useState();

  function toggleEditUserPopupOpen() {
    setIsEditUserPopupOpen(prevStatus => !prevStatus)
  } 

  function toggleAddUserPopupOpen() {
    setIsAddNewUserPopupOpen(prevStatus => !prevStatus)
  } 

  function toggleDeleteUserPopupOpen() {
    setIsDeleteUserPopupOpen(prevStatus => !prevStatus)
  } 

  function getEditingUserUserById(id) {
    setEditingUser(usersList.find(user => user.id === id))
  }

  function getDeletingUserById(id) {
    setDeletingUser(id);
  }
//I was close to solution but faced problem. The problem was that I need to put return in if condition and in map to return from map. I thought map return new array itself without return. Also need to discuss.
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
        toggleEditUserPopupOpen={toggleEditUserPopupOpen}
        toggleDeleteUserPopupOpen={toggleDeleteUserPopupOpen}
        getEditingUserUserById={getEditingUserUserById}
        getDeletingUserById={getDeletingUserById}
      />
      <AddUserPopup 
        isOpen={isAddNewUserPopupOpen}
        onAdd={addNewUser}
        onClose={toggleAddUserPopupOpen}
      />
      <EditUserPopup 
        isOpen={isEditUserPopupOpen}
        onEdit={editUser}
        onClose={toggleEditUserPopupOpen}
        initialUserData={editingUser}
      />
      <DeleteUserPopup 
        isOpen={isDeleteUserPopupOpen}
        onDelete={deleteUser}
        onClose={toggleDeleteUserPopupOpen}
      />
    </>
  )
}

export default App
