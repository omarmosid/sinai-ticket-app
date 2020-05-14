import React, { useState, useContext } from "react";
import Layout from "../../components/reusable/layout/layout";
import { Segment, Form, Input, Button, Header } from "semantic-ui-react";
import styled from "styled-components";
import { GlobalContext } from "../../context/globalContext";
import { useHistory } from "react-router-dom";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-top: 20px;
  }
  .form__segment {
    max-width: 280px;
    width: 100%;
    margin-top: 2rem;
  }
`;

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(GlobalContext);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("signedin");
    dispatch({ type: "LOGIN" });
    history.push("/dashboard");
  };
  return (
    <Layout>
      <StyledWrapper>
        <Header as="h1">Ticket App</Header>
        <Segment className="form__segment">
          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <label>Username</label>
              <Input
                required
                type="text"
                placeholder="JohnDoe998"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <Input
                required
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Field>
            <Button primary fluid>
              Submit
            </Button>
          </Form>
        </Segment>
      </StyledWrapper>
    </Layout>
  );
};

export default Login;
