import React, { useState } from "react";
import "./CreateTicket.scss";
import { useProject } from "../../context/ProjectContext";
import { v4 as uuidv4 } from "uuid";
const CreateTicket = ({ setShowTicket }) => {
  const { addTicket } = useProject();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([""]);

  return (
    <div className="modal">
      <div className="modal-card">
        <h3 className="heading-l">Add new Task</h3>
        <button onClick={() => setShowTicket(false)}>Close model</button>
        <div className="modal-input-group">
          <label htmlFor="title" className="body-m">
            Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            type="text"
            placeholder="e.g Bob"
          />
        </div>

        <div className="modal-input-group">
          <label htmlFor="description" className="body-m">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="description"
            type="text"
            placeholder="e.g Bob"
          />
        </div>

        <div className="modal-input-group">
          <label htmlFor="subtasks" className="body-m">
            Subtasks
          </label>
          {tasks.map((task, index) => (
            <input
              id="subtasks"
              value={task}
              type="text"
              placeholder="e.g Bob"
              onChange={(e) => {
                tasks[index] = e.target.value;
                setTasks([...tasks]);
              }}
            />
          ))}
          <button
            onClick={() => {
              setTasks(tasks.concat(""));
            }}>
            + Add new task
          </button>
        </div>

        <button
          onClick={() =>
            addTicket({
              id: uuidv4(),
              title,
              description,
              tasks,
            })
          }>
          Create ticket
        </button>
      </div>
    </div>
  );
};

export default CreateTicket;
