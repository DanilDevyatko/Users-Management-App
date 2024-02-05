import { TableRow } from "../TableRow";
import "./index.scss";

export function Table({usersList, toggleEditUserPopupOpen, getUserById}) {
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
              toggleEditUserPopupOpen={toggleEditUserPopupOpen} 
              getUserById={getUserById}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}
