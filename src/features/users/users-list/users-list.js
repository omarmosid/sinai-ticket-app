import React, { useContext } from "react";
import {
  List,
  Grid,
  Button,
  Container,
  Segment,
  Header,
  Card,
} from "semantic-ui-react";
import { GlobalContext } from "../../../context/globalContext";
import Layout from "../../../components/reusable/layout/layout";

const UsersList = ({ isAdminHidden }) => {
  const { state } = useContext(GlobalContext);
  console.log(state.users);
  let filteredUsers = state.users;
  if (isAdminHidden) {
    filteredUsers = state.users.filter((user) => user.role !== "admin");
  }
  return (
    <Grid>
      <Grid.Row>All users</Grid.Row>
      <Grid.Row columns={3}>
        {state.users.length !== 0 &&
          filteredUsers.map((user) => {
            return (
              <Grid.Column key={user._id} >
                <Card>
                  <Card.Content>
                    <Card.Header>{user.name}</Card.Header>
                    <Card.Meta>
                      <span>{user.role}</span>
                    </Card.Meta>
                  </Card.Content>
                  <Card.Content extra>
                    <Button>Delete</Button>
                  </Card.Content>
                </Card>
              </Grid.Column>
            );
          })}
      </Grid.Row>
    </Grid>
  );
};

export default UsersList;
