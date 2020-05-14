import React, { useState } from "react";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import { useContext } from "react";
import { GlobalContext } from "../../../context/globalContext";
import { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const TicketCreate = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const history = useHistory();
  const userId = state.user._id;
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    status: "open",
    category: "front-end",
    assignedTo: "omar",
    createdBy: "",
    comments: [],
  });

  useEffect(() => {
    setInputs({
      ...inputs,
      createdBy: userId
    })
  }, [])

  // Update on change
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://sinai-ticket-app.herokuapp.com/api/tickets/', {
      ...inputs,
    })
      .then(res => {
        console.log(res)
        // Navigate to specific ticket page
        history.push(`/ticket/${res.data._id}`)
      })
      .catch(err => console.log(err))
  };

  console.log(inputs);
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>Title</label>
        <Input
          type="text"
          name="title"
          placeholder="API is down!"
          value={inputs.title}
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Description</label>
        <TextArea
          type="text"
          name="description"
          placeholder="describe your issue"
          value={inputs.description}
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Category</label>
        <select
          name="category"
          value={inputs.category}
          onChange={handleChange}>
          <option value="front-end">Front End</option>
          <option value="back-end">Back End</option>
          <option value="dev-ops">Dev ops</option>
        </select>
      </Form.Field>
      <Form.Field>
        <label>Assign to</label>
        <select
          name="assignedTo"
          value={inputs.assignedTo}
          onChange={handleChange}>
          {
            state.users.map((user) => <option key={user._id} value={user._id}>{user.name}</option>)
          }
        </select>
      </Form.Field>
      <Button secondary type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default TicketCreate;
