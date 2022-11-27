import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Todo from "./Todo";

const TodoList = ({ todos }) => {
  const sortedTodos = todos.sort(
    (a, b) => b.timestamp.seconds - a.timestamp.seconds
  );

  return (
    <div className="my-5">
      <Container>
        <Row>
          <Col>
            {sortedTodos.map((todo, index) => (
              <Todo key={`todo-${todo.id}`} todo={todo} number={index + 1} />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TodoList;
