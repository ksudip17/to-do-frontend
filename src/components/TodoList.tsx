import React, { useState, useEffect, ReactNode } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

interface Todo {
  id: number;
  text: string;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [, setError] = useState<{
    [x: string]: ReactNode;
    status: number;
    statusText: string;
  } | null>(null);

  useEffect(() => {
    fetch("/api/todos")
      .then((response) => response.json())
      .then(setTodos)
      .catch((err) =>
        setError({ status: err.status, statusText: err.statusText })
      );
  }, []);

  const addTodo = (text: string) => {
    fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    })
      .then((response) => response.json())
      .then((newTodo) => setTodos([...todos, newTodo]))
      .catch((err) =>
        setError({ status: err.status, statusText: err.statusText })
      );
  };

  const deleteTodo = (id: number) => {
    fetch(`/api/todos/${id}`, {
      method: "DELETE",
    })
      .then(() => setTodos(todos.filter((todo) => todo.id !== id)))
      .catch((err) =>
        setError({ status: err.status, statusText: err.statusText })
      );
  };

  return (
    <>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} />
      ))}
      <AddTodo onAdd={addTodo} />
    </>
  );
};

export default TodoList;
