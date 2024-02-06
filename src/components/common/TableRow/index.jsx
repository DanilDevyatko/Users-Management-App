import { Button } from "../Button";

export function TableRow({
  data, 
  toggleEditUserPopupOpen, 
  toggleDeleteUserPopupOpen, 
  getEditingUserUserById, 
  getDeletingUserById
}) {
  const {id, name, surname, age} = data;

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{age}</td>
      <td>
        <Button text="edit" onClick={() => {
          toggleEditUserPopupOpen();
          getEditingUserUserById(id);
        }} />
        <Button text="remove" onClick={()=>{
          toggleDeleteUserPopupOpen();
          getDeletingUserById(id);
        }}/>
      </td>
    </tr>
  )
}
