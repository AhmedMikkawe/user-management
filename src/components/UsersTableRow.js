import { Form, Button } from "react-bootstrap";
import { useState } from "react";
function UsersTableRow(props) {
  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return props.user.name === undefined ? null : (
    <tr onClick={() => handleOnChange()}>
      <td>
        <Form.Check
          aria-label={props.user.name}
          onChange={handleOnChange}
          checked={isChecked}
        />
      </td>
      <td>
        <span
          className="rounded-circle bg-opacity-50 bg-danger p-2"
          style={{ fontSize: "12px" }}
        >
          {props.user.name[0]}
        </span>
        {props.user.name}
      </td>
      <td>{props.user.userName}</td>
      <td>{props.user.email}</td>
      <td>{props.user.group}</td>
      <td>{props.user.status}</td>
      <td>{props.user.createdOn}</td>
      <td>
        <Button
          variant="danger"
          size="sm"
          disabled={!isChecked}
          onClick={() => props.onDelete(props.user.name)}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
}
export default UsersTableRow;
