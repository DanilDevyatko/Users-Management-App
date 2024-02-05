import { Button } from "../Button";

export function TableRow({data, toggleEditUserPopupOpen, getUserById}) {
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
          getUserById(id);
        }} />
        <Button text="remove" onClick={() => console.log('remove')}/>
      </td>
    </tr>
  )
}
