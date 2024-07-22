import React, { useState } from 'react';

interface AddTodoProps {
  onAdd: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
  const [newTodoText, setNewTodoText] = useState('');

  const handleAdd = () => {
    if (newTodoText.trim() !== '') {
      onAdd(newTodoText);
      setNewTodoText('');
    }
  };

  return (
    <div className="row">
      <input
        type="text"
        className="text-input"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 'Enter') handleAdd();
        }}
        placeholder="Type a new to-do and press Enter"
      />
    </div>
  );
};

export default AddTodo;
