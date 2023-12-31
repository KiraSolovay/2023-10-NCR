import "./App.css";
//Import route and our components
import { Route, Routes } from "react-router-dom";
import Currencies from "./pages/Currencies.js";
import Main from "./pages/Main.js";
import Price from "./pages/Price.js";
import Nav from "./components/Nav.js";

export default function App () {
  // We will use the Route component to specify each route
  return (
    <div className="App">
      <Nav />
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/currencies" element={<Currencies/>}/>
      <Route path="/price" element={<Price/>}/>
    </Routes>
    </div>
  );
}