import { Route, Routes } from "react-router-dom";
import { ChangeChannel } from "./pages/ChangeChannel";
import { AppLayout } from "./layout/AppLayout";
import { ChangeETME } from "./pages/ChangeETME";
import { MSS3G } from "./pages/MSS3G";
import { RNCConector } from "./pages/RNCConector";
import { TRXDelete } from "./pages/TRXDelete";
import { Creation2G } from "./pages/Creation2G";
import { MSS2G } from "./pages/MSS2G.jsx";
import { RETs } from "./pages/RETs.jsx";
import { Dummy2G } from "./pages/Dummy2G.jsx";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<ChangeChannel />} />
        <Route path="/changeETME" element={<ChangeETME />} />
        <Route path="/MSS3G" element={<MSS3G />} />
        <Route path="/RNCConector" element={<RNCConector />} />
        <Route path="/TRXDelete" element={<TRXDelete />} />
        <Route path="/Creation2G" element={<Creation2G />} />
        <Route path="/MSS2G" element={<MSS2G />} />
        <Route path="/RETs" element={<RETs />} />
        <Route path="/Dummy2G" element={<Dummy2G />} />
      </Route>
    </Routes>
  );
}

export default App;
