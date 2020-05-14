import React, { useContext } from "react";
import { List } from "semantic-ui-react";
import { GlobalContext } from "../../../context/globalContext";

const UsersList = () => {
  const { state } = useContext(GlobalContext);
  console.log(state.users);
  return (
    <List divided relaxed>
      {state.users.length !== 0 &&
        state.users.map((user) => {
          return (
            <List.Item key={user._id}>
              <List.Header>{user.name}</List.Header>
              <List.Description as="a">{user.role}</List.Description>
            </List.Item>
          );
        })}
    </List>
  );
};

export default UsersList;
