import "./App.css";
import "./styles/funnel.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FunnelLanding from "./pages/FunnelLanding";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FunnelLanding />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
