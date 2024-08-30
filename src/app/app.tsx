import { Route, Routes, useLocation } from "react-router";
import { ArtPage, FashionPage, HomePage } from "../pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/art" element={<ArtPage />} />
        <Route path="/fashion" element={<FashionPage />} />
      </Routes>
    </>
  );
}

export default App;
