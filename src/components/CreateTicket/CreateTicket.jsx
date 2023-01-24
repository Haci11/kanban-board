import React from "react";
import "./CreateTicket.scss";
const CreateTicket = () => {
  return (
    <div className="modal">
      <div className="modal-card">
        <h3 className="heading-l">Add new Task</h3>
        <div className="modal-input-group">
          <label htmlFor="title" className="body-m">
            Title
          </label>
          <input id="title" type="text" placeholder="e.g Bob" />
        </div>

        <div className="modal-input-group">
          <label htmlFor="description" className="body-m">
            Description
          </label>
          <textarea id="description" type="text" placeholder="e.g Bob" />
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
