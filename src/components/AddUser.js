import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

function AddUser(props) {
  const date = new Date();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [user, setUser] = useState({ createdOn: date.toDateString() });
  return (
    <>
      <Button variant="success" onClick={handleShow}>
        + Add New
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          className="modal-header--black"
          closeButton
          closeVariant="white"
        >
          <Modal.Title className="text-white">Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="userFullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Full Name"
                value={user.name || ""}
                onChange={(e) =>
                  setUser((prevState) => {
                    return { ...prevState, name: e.target.value };
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="userName">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter User Name"
                value={user.userName || ""}
                onChange={(e) =>
                  setUser((prevState) => {
                    return { ...prevState, userName: e.target.value };
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="userEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email Address"
                value={user.email || ""}
                onChange={(e) =>
                  setUser((prevState) => {
                    return { ...prevState, email: e.target.value };
                  })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>User Group</Form.Label>
              <Form.Select
                onChange={(e) => {
                  setUser((prevState) => {
                    return { ...prevState, group: e.target.value };
                  });
                }}
              >
                <option>Choose User Group</option>
                <option>Office</option>
                <option>Managers</option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label>User Status</Form.Label>
              <Form.Select
                onChange={(e) => {
                  setUser((prevState) => {
                    return { ...prevState, status: e.target.value };
                  });
                }}
              >
                <option>Choose User Status</option>
                <option>Locked</option>
                <option>Active</option>
                <option>Inactive</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <a
            className="me-auto text-dark"
            href="javascript:void(0)"
            onClick={() => {
              setUser((prevState) => {
                return { ...prevState, email: "", userName: "", name: "" };
              });
            }}
          >
            Reset fields
          </a>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="success"
            onClick={() => {
              props.onAdd(user);
            }}
          >
            Add User
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default AddUser;
