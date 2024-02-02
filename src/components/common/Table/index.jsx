import { TableRow } from "../TableRow/index.jsx";
  
const users = [
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
];

export function Table() {
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
          {users.map((user) => <TableRow key={user.id} data={user}/>)}
        </tbody>
      </table>
    </div>
  );
}