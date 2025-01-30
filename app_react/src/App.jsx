import "./App.css";
import Layout from "./components/Layout/Layout";
import Blog from "./components/Blog/Blog";
import Works from "./components/Works/Works";
import Review from "./components/Review/Review";
import Post from "./components/Post/Post";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<Post />} /> {/* Динамический маршрут */}
      <Route path="/works" element={<Works />} />
      <Route path="/review" element={<Review />} />
    </Routes>
  );
}

export default App;
