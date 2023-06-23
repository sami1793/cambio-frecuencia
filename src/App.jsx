import { Route, Routes } from "react-router-dom";
import { ChangeChannel } from "./pages/ChangeChannel";
import { AppLayout } from "./layout/AppLayout";
import { ChangeETME } from "./pages/ChangeETME";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        {/* <Route path="/" element={<ChangeChannel />} /> */}
        <Route path="/" element={<ChangeETME />} />
      </Route>
    </Routes>
  );
}

export default App;
