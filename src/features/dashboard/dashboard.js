import React, { useContext } from "react";
import Layout from "../../components/reusable/layout/layout";
import { GlobalContext } from "../../context/globalContext";
import TicketSingle from "../ticket/ticket-single/ticket-single";
import { Container, Grid, Segment } from "semantic-ui-react";
import TicketList from "../ticket/ticket-list/ticket-list";
import styled from "styled-components";
import UsersList from "../users/users-list/users-list";

const Dashboard = () => {
  const { state } = useContext(GlobalContext);
  return (
    <Layout>
      <StyledContainer>
        <Grid container>
          <Grid.Column width={10}>
            <Segment>
              <h2>Tickets Assigned to me</h2>
              <TicketList />
            </Segment>
          </Grid.Column>
          {/* <Grid.Column width={6}>
            {state.user.role === "admin" && (
              <Segment>
                <h4>Members</h4>
                <UsersList />
              </Segment>
            )}
          </Grid.Column> */}
        </Grid>
      </StyledContainer>
    </Layout>
  );
};

const StyledContainer = styled.div``;

export default Dashboard;
