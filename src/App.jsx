import { Route, Routes } from "react-router-dom";
import { ChangeChannel } from "./pages/ChangeChannel";
import { AppLayout } from "./layout/AppLayout";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<ChangeChannel />} />
      </Route>
    </Routes>
  );
}

export default App;
