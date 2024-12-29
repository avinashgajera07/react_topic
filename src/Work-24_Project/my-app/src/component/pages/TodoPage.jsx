import React, { useState } from "react";
import "./todocss.css";

function TodoPage() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [editingTask, setEditingTask] = useState(null);

  const addTask = () => {
    if (!taskInput.trim()) return;
    if (editingTask) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === editingTask.id ? { ...task, text: taskInput } : task
        )
      );
      setEditingTask(null);
    } else {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: Date.now(), text: taskInput, status: "todo" },
      ]);
    }
    setTaskInput("");
  };

  const editTask = (task) => {
    setTaskInput(task.text);
    setEditingTask(task);
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleDragStart = (e, task) => {
    e.dataTransfer.setData("taskId", task.id);
  };

  const handleDrop = (e, status) => {
    const taskId = e.dataTransfer.getData("taskId");
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === parseInt(taskId) ? { ...task, status } : task
      )
    );
  };

  const allowDrop = (e) => e.preventDefault();

  return (
    <div className="app-container">
      <h1 className="app-title">To-Do App</h1>

      {/* Input Section */}
      <div className="input-section">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter a task"
          className="task-input"
        />
        <button onClick={addTask} className="add-btn">
          {editingTask ? "Update Task" : "Add Task"}
        </button>
      </div>

      {/* Sections */}
      <div className="sections-container">
        {/* To-Do Section */}
        <div
          className="task-section"
          onDragOver={allowDrop}
          onDrop={(e) => handleDrop(e, "todo")}
        >
          <h2 className="section-title">To-Do</h2>
          <ul className="task-list">
            {tasks
              .filter((task) => task.status === "todo")
              .map((task) => (
                <li
                  key={task.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, task)}
                  className="task-item todo-item"
                >
                  <span>{task.text}</span>
                  <div>
                    <button
                      onClick={() => editTask(task)}
                      className="edit-btn"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </div>

        {/* Complete Section */}
        <div
          className="task-section"
          onDragOver={allowDrop}
          onDrop={(e) => handleDrop(e, "complete")}
        >
          <h2 className="section-title">Complete</h2>
          <ul className="task-list">
            {tasks
              .filter((task) => task.status === "complete")
              .map((task) => (
                <li
                  key={task.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, task)}
                  className="task-item complete-item"
                >
                  <span>{task.text}</span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TodoPage;
