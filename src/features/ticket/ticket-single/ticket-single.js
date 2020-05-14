import React from "react";
import { Segment, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TicketSingle = ({ ticket }) => {
  const {
    _id,
    title,
    description,
    status,
    dateCreated,
    assignedTo,
    category,
    comments,
  } = ticket;
  return (
    <>
      <StyledLink to={`ticket/${_id}`}>
        <Segment>
          <Header as="h3">{title}</Header>
        </Segment>
      </StyledLink>
    </>
  );
};

const StyledLink = styled(Link)`
  width: 100%;
  margin-bottom: 20px;
  display: inline-block;
`

export default TicketSingle;
