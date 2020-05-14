import React from "react";
import Layout from "../../components/reusable/layout/layout";
import { Container, Header, Grid } from "semantic-ui-react";

const Home = () => {
  return (
    <Layout>
      <Grid textAlign="center" verticalAlign="middle" height="100vh">
        <Grid.Column verticalAlign="middle" stretched>
          <Header as="h1">Welcome to Sinai</Header>
        </Grid.Column>
      </Grid>
    </Layout>
  );
};

export default Home;
