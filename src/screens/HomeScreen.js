import React, { useState, useEffect } from "react";
import TodoList from "../components/TodoList";
import db from "../firebase";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    db.collection("todos").onSnapshot((snapshot) => {
      setTodos(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          text: doc.data().todo,
          timestamp: doc.data().timestamp,
        }))
      );
    });
  }, []);

  return (
    <div>
      <h1 className="heading py-5">Full Stack Todo App!</h1>
      <Link to="/addtodo" data-testid="add-todo-link">
        <Button>Add New Todo</Button>
      </Link>

      <TodoList todos={todos} />
    </div>
  );
};

export default HomeScreen;
