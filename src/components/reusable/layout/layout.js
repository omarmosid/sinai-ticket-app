import React from "react";
import Navbar from "../navbar/navbar";
import { Grid, Container } from "semantic-ui-react";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container as="main">
        {children}
      </Container>
    </>
  );
};

export default Layout;
