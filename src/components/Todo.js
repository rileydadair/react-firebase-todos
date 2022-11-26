import React, { useState } from "react";
import "./todo.css";
import { Button } from "react-bootstrap";
import db from "../firebase";

const Todo = ({ todo }) => {
  const deleteTodo = (e) => {
    e.preventDefault();
    db.collection("todos").doc(todo.id).delete();
  };

  const [checked, setChecked] = useState(false);

  return (
    <div className="todo">
      <div className="todo-id">
        <h5>
          ID:{" "}
          <span
            style={{
              marginLeft: "10px",
              color: "yellow",
            }}
          >
            {todo.id.slice(0, 3)}
          </span>{" "}
        </h5>
      </div>
      <div className="todo-text">
        {checked ? <p className="checked">{todo.text}</p> : <p>{todo.text}</p>}
      </div>
      <div class="buttons">
        <Button
          onClick={() => setChecked(!checked)}
          variant="success"
          className="del-button"
        >
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-pencil-square"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path
              fill-rule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
            />
          </svg>
        </Button>
        <Button
          onClick={deleteTodo}
          style={{ marginLeft: "10px" }}
          variant="danger"
          className="del-button"
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
              fill-rule="evenodd"
              d="M12.9 3c-.18-.14-.497-.307-.974-.466C10.967 2.214 9.58 2 8 2s-2.968.215-3.926.534c-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466zM8 5c3.314 0 6-.895 6-2s-2.686-2-6-2-6 .895-6 2 2.686 2 6 2z"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default Todo;
