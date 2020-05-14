import React from "react";
import { Link } from "react-router-dom";
import { Menu, Button, Modal, Header } from "semantic-ui-react";
import { useContext } from "react";
import { GlobalContext } from "../../../context/globalContext";
import TicketCreate from "../../../features/ticket/ticket-create/ticket-create";

const Navbar = () => {
  const { state } = useContext(GlobalContext);
  return (
    <Menu size="huge">
      <Menu.Item header as={Link} to="/">
        Home
      </Menu.Item>
      <Menu.Item as={Link} to="/dashboard">
        Dashboard
      </Menu.Item>
      {state.isLoggedIn && (
        <Menu.Item position="right">
          <Modal
            trigger={<Button primary>Create a Ticket</Button>}
            size="small"
            centered={false}>
            <Header icon="ticket" content="Create a new Ticket" />
            <Modal.Content>
              <TicketCreate />
            </Modal.Content>
          </Modal>
        </Menu.Item>
      )}
    </Menu>
  );
};

export default Navbar;
