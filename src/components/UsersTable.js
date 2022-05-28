import { Table } from "react-bootstrap";
import UsersTableRow from "./UsersTableRow";
function UsersTable(props) {
  const handleDelete = (userName) => {
    props.onDelete(userName);
  };
  return props.users.length > 0 ? (
    <Table responsive hover size="lg">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>User Name</th>
          <th>Email Address</th>
          <th>Group</th>
          <th>Status</th>
          <th colSpan={2}>Created on</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((user, index) => {
          return (
            <UsersTableRow key={index} user={user} onDelete={handleDelete} />
          );
        })}
      </tbody>
    </Table>
  ) : (
    <h1 className="text-center">No Users</h1>
  );
}
export default UsersTable;
