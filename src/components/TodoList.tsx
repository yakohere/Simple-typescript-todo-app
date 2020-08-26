import React from "react";

interface ToDoListProps {
  items: { id: string; text: string }[];
}

const TodoList: React.FC<ToDoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
