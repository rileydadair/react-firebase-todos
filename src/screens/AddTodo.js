import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import db from "../firebase";

const AddTodo = ({ history }) => {
  const [newTodo, setNewTodo] = useState("");

  const addTodoHandler = (e) => {
    e.preventDefault();
    console.log(newTodo);
    db.collection("todos").add({
      todo: newTodo,
    });
    history.push("/");
  };

  return (
    <div>
      <h1 class="py-5">Add A Todo</h1>
      <Container>
        <Form onSubmit={addTodoHandler}>
          <Form.Group>
            <Form.Label>Add Todo</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter todo"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button type="submit" variant="success">
            Add
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default AddTodo;
