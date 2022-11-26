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
        }))
      );
    });
  }, []);

  return (
    <div>
      <h1 className="heading py-5">Full Stack Todo App!</h1>
      <Link to="/addtodo">
        <Button>Add New Todo</Button>
      </Link>

      <TodoList todos={todos} />
    </div>
  );
};

export default HomeScreen;
