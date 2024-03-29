import { TableRow } from "../TableRow";
import "./index.scss";

export function Table({usersList, onEdit, onDelete}) {
  return (
    <div  className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((user) => (
            <TableRow 
              key={user.id} 
              data={user}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
