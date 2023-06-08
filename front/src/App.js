import { BrowserRouter, Route, Routes } from "react-router-dom";
import Router from "./Utils/Router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Router />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
