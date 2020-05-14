import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GlobalContext } from "../../../context/globalContext";
import { useParams } from "react-router-dom";
import Layout from "../../../components/reusable/layout/layout";
import {
  Segment,
  Grid,
  Comment,
  Header,
  Form,
  Button,
  Label,
} from "semantic-ui-react";
import styled from "styled-components";

const TicketPage = (props) => {
  const { id } = useParams();
  const { state, dispatch } = useContext(GlobalContext);

  const [ticket, setTicket] = useState(null);
  const [comment, setComment] = useState('');

  useEffect(() => {
    axios
      .get(`https://sinai-ticket-app.herokuapp.com/api/tickets/${id}`)
      .then((res) => setTicket(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(ticket);

  const closeTicket = (id) => {
    console.log(id);
    dispatch({ type: "CLOSE_TICKET", payload: { id: id } });
  };

  const addComment = (e) => {
    axios.put(`http://localhost:4000/api/tickets/comments/${id}`, {
      content: comment,
      author: 'Omar'
    })
      .then(res => {
        console.log(res.data);
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      })
  }

  if (ticket === null) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <StyledContainer>
        <Grid columns={2}>
          {/* Main Column */}
          <Grid.Column width={10}>
            <Segment className="main">
              <Label
                as="a"
                color={ticket.status === "open" ? "green" : "red"}
                ribbon>
                {ticket.status}
              </Label>
              <h1>{ticket.title}</h1>
              <p>{ticket.description}</p>
            </Segment>
            <div className="comments">
              <Comment.Group>
                <Header as="h3" dividing>
                  Comments
                </Header>
                {ticket.comments.length !== 0 &&
                  ticket.comments.map((comment) => {
                    return (
                      <Comment key={comment.id}>
                        <Comment.Avatar src="https://api.adorable.io/avatars/50/abott@adorable.png" />
                        <Comment.Content>
                          <Comment.Author as="a">{comment.author}</Comment.Author>
                          <Comment.Metadata>
                            <div>Posted on {new Date(comment.date).toDateString()}</div>
                          </Comment.Metadata>
                          <Comment.Text>{comment.content}</Comment.Text>
                        </Comment.Content>
                      </Comment>
                    );
                  })}
                <Form reply onSubmit={addComment}>
                  <Form.TextArea value={comment} onChange={(e) => setComment(e.target.value)}/>
                  <Button>Add Reply</Button>
                </Form>
              </Comment.Group>
            </div>
          </Grid.Column>

          {/* Side Column */}
          <Grid.Column width={6}>
            <Segment.Group raised>
              <Segment>
                <span>
                  Created on {new Date(ticket.createdAt).toLocaleString()}
                </span>
              </Segment>
              <Segment>
                <Label>{ticket.category}</Label>
              </Segment>
            </Segment.Group>
            <Button
              primary
              fluid
              size="large"
              className="cta"
              onClick={(id) => closeTicket(ticket.id)}>
              Resolve Ticket
            </Button>
          </Grid.Column>
        </Grid>
      </StyledContainer>
    </Layout>
  );
};

const StyledContainer = styled.div`
  .cta {
    margin: 20px 0px;
  }
`;

export default TicketPage;
