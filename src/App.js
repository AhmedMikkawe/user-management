import { Container, Row, Col, FormControl } from "react-bootstrap";
import { useState } from "react";
import UsersTable from "./components/UsersTable";
import AddUser from "./components/AddUser";

function App() {
  let [users, setUsers] = useState([]);
  let [searchedUsers, setSearchUsers] = useState([]);
  const addUser = (user) => {
    setUsers((prevState) => {
      return [...prevState, user];
    });
  };
  const handleDelte = (userName) => {
    let newUsers = users.filter((user) => {
      return user.name !== userName;
    });
    setUsers(newUsers);
  };
  const handleSearch = (e) => {
    let result = users.filter((user) => {
      return user.name.includes(e.target.value);
    });
    setSearchUsers(result);
  };
  return (
    <Container>
      <Row>
        <Col>
          <div className="d-flex justify-content-between my-3">
            <h3>User Management</h3>
            <AddUser onAdd={addUser} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={3}>
          <FormControl
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={handleSearch}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <UsersTable
            users={searchedUsers.length < 1 ? users : searchedUsers}
            onDelete={handleDelte}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
