import { HomeScreen, ListScreen } from "./screens";
import "./App.css";
import { ListCard } from "./components/ListCard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/list" element={<ListScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
