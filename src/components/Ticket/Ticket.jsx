import React, { useState } from "react";
import "./Ticket.scss";
const Ticket = ({ item }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="ticket" onClick={() => setShow(!show)}>
      <h3 className="heading-m ">{item.title}</h3>
      <p className="body-m">{item.description}</p>
      <p className="body-m">{item.tasks.length} subtasks</p>

      {show && (
        <ul>
          {item.tasks.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Ticket;
