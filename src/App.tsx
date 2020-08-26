import React from "react";

import ToDoList from "./components/TodoList";

const App: React.FC = () => {
  const todos = [{ id: "t1", text: "Finish the course!" }];
  return (
    <div className="App">
      <ToDoList items={todos} />
    </div>
  );
};

export default App;
