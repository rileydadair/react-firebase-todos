import React from "react";
import "./todo.css";
import { Button } from "react-bootstrap";
import db from "../firebase";

const Todo = ({ todo, number }) => {
  const deleteTodo = (e) => {
    e.preventDefault();
    db.collection("todos").doc(todo.id).delete();
  };

  return (
    <div className="todo">
      <div className="todo-id">
        <h5>
          <span
            style={{
              marginLeft: "10px",
              color: "yellow",
            }}
          >
            {number}
          </span>{" "}
        </h5>
      </div>
      <div className="todo-text">
        <p className="todo-title" data-testid="todo-title">
          {todo.text}
        </p>
      </div>
      <div className="buttons">
        <Button
          onClick={deleteTodo}
          style={{ marginLeft: "10px" }}
          variant="danger"
          className="del-button"
          aria-label={`Remove ${todo.text}`}
          data-testid="remove-todo"
        >
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-trash2-fill del-button"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.037 3.225l1.684 10.104A2 2 0 0 0 5.694 15h4.612a2 2 0 0 0 1.973-1.671l1.684-10.104C13.627 4.224 11.085 5 8 5c-3.086 0-5.627-.776-5.963-1.775z" />
            <path
              fillRule="evenodd"
              d="M12.9 3c-.18-.14-.497-.307-.974-.466C10.967 2.214 9.58 2 8 2s-2.968.215-3.926.534c-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466zM8 5c3.314 0 6-.895 6-2s-2.686-2-6-2-6 .895-6 2 2.686 2 6 2z"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default Todo;
