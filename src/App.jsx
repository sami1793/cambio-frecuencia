import { Route, Routes } from "react-router-dom";
import { ChangeChannel } from "./pages/ChangeChannel";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ChangeChannel />} />
    </Routes>
  );
}

export default App;
