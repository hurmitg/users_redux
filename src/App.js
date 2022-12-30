import React from "react";
import "./App.css";
import AllRoutes from "./routes/AllRoutes";
import Nav from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Nav />
      <AllRoutes />
    </div>
  );
}
export default App;
