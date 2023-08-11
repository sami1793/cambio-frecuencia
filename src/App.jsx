import { Route, Routes } from "react-router-dom";
import { ChangeChannel } from "./pages/ChangeChannel";
import { AppLayout } from "./layout/AppLayout";
import { ChangeETME } from "./pages/ChangeETME";
import { MSS3G } from "./pages/MSS3G";
import { RNCConector } from "./pages/RNCConector";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<ChangeChannel />} />
        <Route path="/changeETME" element={<ChangeETME />} />
        <Route path="/MSS3G" element={<MSS3G />} />
        <Route path="/RNCConector" element={<RNCConector />} />
      </Route>
    </Routes>
  );
}

export default App;
