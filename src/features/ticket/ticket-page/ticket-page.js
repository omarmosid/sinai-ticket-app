import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GlobalContext } from "../../../context/globalContext";
import { useParams, useHistory } from "react-router-dom";
import Layout from "../../../components/reusable/layout/layout";
import styled from "styled-components";
import {
  Segment,
  Grid,
  Comment,
  Header,
  Form,
  Button,
  Label,
  Modal,
} from "semantic-ui-react";
import CustomLoader from "../../../components/reusable/custom-loader/custom-loader";

const TicketPage = (props) => {
  const { id } = useParams();
  const history = useHistory();
  const { state, dispatch } = useContext(GlobalContext);

  const [ticket, setTicket] = useState(null);
  const [comment, setComment] = useState("");
  const [assignedTo, setAssignedTo] = useState('');

  // Fetch ticket details
  useEffect(() => {
    axios
      .get(`/api/tickets/${id}`)
      .then((res) => {
        setTicket(res.data)
      })
      .catch((err) => console.log(err));
  }, []);

  const closeTicket = () => {
    axios
      .put(`/api/tickets/status/${id}`)
      .then((res) => {
        console.log(res);
        history.push('/dashboard')
        history.push(`/ticket/${ticket._id}`)
      })
      .catch((err) => console.log(err));
  };

  const deleteTicket = () => {
    axios
      .delete(`/api/tickets/${id}`)
      .then((res) => {
        // Getting fresh tickets array after deleting a ticket
        axios.get('/api/tickets/')
          .then(res => {
            dispatch({type: 'GET_TICKETS', payload: res.data})
            // Navigating to dashboard and showing updated tickets with deletedTicket removed from view
            history.push('/dashboard')
          })
          .catch((err) => console.log(err))
      })
      .catch((err) => console.log(err));
  };

  const addComment = (e) => {
    axios
      .put(
        `/api/tickets/comments/${id}`,
        {
          content: comment,
          author: "Omar",
        }
      )
      .then((res) => {
        console.log(res.data);
        history.push('/dashboard')
        history.push(`/ticket/${ticket._id}`)
        // window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (ticket === null) {
    return (
      <Layout>
        <CustomLoader />
      </Layout>
    );
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
                {ticket.status.toUpperCase()}
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
                      <Comment key={comment._id}>
                        <Comment.Avatar src="https://api.adorable.io/avatars/50/abott@adorable.png" />
                        <Comment.Content>
                          <Comment.Author as="a">
                            {comment.author}
                          </Comment.Author>
                          <Comment.Metadata>
                            <div>
                              Posted on {new Date(comment.date).toLocaleString()}
                            </div>
                          </Comment.Metadata>
                          <Comment.Text>{comment.content}</Comment.Text>
                        </Comment.Content>
                      </Comment>
                    );
                  })}
                <Form reply onSubmit={addComment}>
                  <Form.TextArea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
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
            <Segment>
              <h4>Assigned to: {ticket.assignedTo}</h4>

            </Segment>
            <Button
              primary
              fluid
              size="large"
              className="cta"
              disabled={ticket.status === "closed"}
              onClick={closeTicket}>
              {ticket.status === 'closed' ? 'Closed' : 'Resolve Ticket'}
            </Button>
            <Modal
              size="tiny"
              trigger={
                <Button negative fluid basic size="large" className="delete">
                  Delete this ticket
                </Button>
              }>
              <Modal.Header>Delete this ticket?</Modal.Header>
              <Modal.Content>
                <p>Are you sure you want to delete this ticket?</p>
              </Modal.Content>
              <Modal.Actions>
                <Button negative onClick={deleteTicket}>
                  Yes, Delete this ticket
                </Button>
              </Modal.Actions>
            </Modal>
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
