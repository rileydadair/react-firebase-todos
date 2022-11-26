import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Todo from "./Todo";

const TodoList = ({ todos }) => {
  return (
    <div className="my-5">
      <Container>
        <Row>
          <Col>
            {todos.map((todo) => (
              <Todo todo={todo} />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TodoList;
