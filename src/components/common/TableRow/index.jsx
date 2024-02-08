import { Button } from "../Button";

export function TableRow({data, onEdit, onDelete}) {
  const {id, name, surname, age} = data;

  function handleEdit() {
      onEdit(id)
  }

  function handleDelete() {
    onDelete(id);
  }

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{age}</td>
      <td>
        <Button text="edit" onClick={handleEdit} />
        <Button text="remove" onClick={handleDelete} />
      </td>
    </tr>
  )
}
