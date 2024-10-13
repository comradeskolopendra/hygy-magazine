import { Route, Routes } from "react-router";
import { ArtPage, BeautyPage, CreativePage, EventsPage, FashionPage, HomePage, SocialPage, TopNewsPage, CareerPage, ContactsPage, AboutUsPage, PrivacyPage } from "../pages";
const App = () => {

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

        <Route path="/career" element={<CareerPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPage />} />
      </Routes>
    </>
  );
}

export default App;
