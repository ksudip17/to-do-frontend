import React from "react";

interface TodoItemProps {
  todo: { id: number; text: string };
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete }) => {
  return (
    <div className="row">
      <div className="text">{todo.text}</div>
      <div className="checkbox-wrapper">
        <input type="checkbox" onClick={() => onDelete(todo.id)} />
      </div>
    </div>
  );
};

export default TodoItem;
