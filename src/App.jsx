import { Route, Routes } from "react-router-dom";
import { ChangeChannel } from "./pages/ChangeChannel";
import { AppLayout } from "./layout/AppLayout";
import { ChangeETME } from "./pages/ChangeETME";
import { MSS3G } from "./pages/MSS3G";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<ChangeChannel />} />
        <Route path="/changeETME" element={<ChangeETME />} />
      </Route>
    </Routes>
  );
}

export default App;
