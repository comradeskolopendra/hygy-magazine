import { Route, Routes } from "react-router";
import { ArtPage, BeautyPage, EventsPage, FashionPage, HomePage, SocialPage, TopNewsPage, CreativePage } from "../pages";
import { useEffect } from "react";

const App = () => {

  useEffect(() => {
    // здесь запрос, поставь правильный эндопоинт
    fetch("localhost:8080/smthng").then(res => res.json()).then(data => console.log(data));
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/art" element={<ArtPage />} />
        <Route path="/fashion" element={<FashionPage />} />
        <Route path="/top-news" element={<TopNewsPage />} />
        <Route path="/beauty" element={<BeautyPage />} />
        <Route path="/social" element={<SocialPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/creative" element={<CreativePage />} />
      </Routes>
    </>
  );
}

export default App;
