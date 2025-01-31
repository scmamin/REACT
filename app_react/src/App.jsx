import "./App.css";
import Main from "./Pages/Main/Main";
import Blog from "./Pages/Blog/Blog";
import Works from "./Pages/Works/Works";
import Review from "./Pages/Review/Review";
import Contacts from "./Pages/Contacts/Contacts";
import Post from "./components/Post/Post";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<Post />} />
      <Route path="/works" element={<Works />} />
      <Route path="/review" element={<Review />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
}

export default App;
