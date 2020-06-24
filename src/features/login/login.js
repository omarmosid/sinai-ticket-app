import React, { useState, useContext, useEffect } from "react";
import Layout from "../../components/reusable/layout/layout";
import { Segment, Form, Input, Button, Header } from "semantic-ui-react";
import styled from "styled-components";
import { GlobalContext } from "../../context/globalContext";
import { useHistory, Redirect } from "react-router-dom";
import axios from "axios";

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
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state, dispatch } = useContext(GlobalContext);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("signedin");
    // Ideally I would want hit an async request to an auth endpoint. Mocking auth for now.
    // if(username === 'omar' && password === 'omar') {
    //   const user = state.users.find(user => user.username === 'omar')
    //   localStorage.setItem("user", JSON.stringify(user))
    //   dispatch({ type: "LOGIN" });
    //   window.location.reload()
    // }
    // if(username === 'doe' && password === 'doe') {
    //   const user = state.users.find(user => user.username === 'doe')
    //   localStorage.setItem("user", JSON.stringify(user))
    //   dispatch({ type: "LOGIN" });
    //   window.location.reload()
    // }
    axios
      .post("https://sinai-ticket-app.herokuapp.com/api/auth", { email, password })
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        localStorage.removeItem("token");
        dispatch({ type: "LOGIN_FAIL" });
      });
  };

  // If user is loggedin
  if (state.isLoggedIn) {
    return <Redirect to="/dashboard" />;
  }

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
                type="email"
                placeholder="JohnDoe998"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
