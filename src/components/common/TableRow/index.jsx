import { Button } from "../Button/index.jsx";

export function TableRow({data: {id, name, surname, age}}) {
  
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{age}</td>
      <td>
        <Button text="edit" handleFunction={() => console.log('edit')}/>
        <Button text="remove" handleFunction={() => console.log('remove')}/>
      </td>
    </tr>
  )
}