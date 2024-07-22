import React, { useState } from "react";
import TodoList from "./components/TodoList";

interface Error {
  status: number;
  statusText: string;
  method: string;
  url: string;
}

const App: React.FC = () => {
  const [error, setError] = useState<Error | null>(null);

  //replace with  error handling logic
  React.useEffect(() => {
    setError({
      status: 404,
      statusText: "Not Found",
      method: "GET",
      url: "http://127.0.0.1:5500/api/todos",
    });
  }, []);

  return (
    <div className="app">
      <div className="box">
        <h1>To-Do List</h1>
        <TodoList />
      </div>
      {error && (
        <div className="box error-box">
          <div className="error-header">
            Error {error.status}: {error.statusText}
          </div>
          <div className="error-body">
            <strong>Request:</strong>
            <br />- Method: {error.method}
            <br />- URL: {error.url}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
