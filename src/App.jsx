import { useState } from "react";
import Board from "./components/Board/Board";
import CreateTicket from "./components/CreateTicket/CreateTicket";
import Navbar from "./components/Navbar/Navbar";
import SideNav from "./components/SideNav/SideNav";
function App() {
  const [showTicket, setShowTicket] = useState(false);
  return (
    <div className="App">
      <Navbar setShowTicket={setShowTicket} />
      <main>
        <SideNav />
        <Board />
      </main>
      {showTicket && <CreateTicket setShowTicket={setShowTicket} />}
    </div>
  );
}

export default App;
