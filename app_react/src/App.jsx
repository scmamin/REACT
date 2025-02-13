import "./App.css";
import Main from "./Pages/Main/Main";
import Blog from "./Pages/Blog/Blog";
import Works from "./Pages/Works/Works";
import Review from "./Pages/Review/Review";
import Contacts from "./Pages/Contacts/Contacts";
import Post from "./components/Post/Post";
import ThemeWrapper from "./components/ThemeWrapper/ThemeWrapper";
import { Route, Routes } from "react-router-dom";
import { ThemeContext } from "./components/ThemeContext/ThemeContext";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((Theme) => (Theme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeWrapper theme={theme}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Post />} />
          <Route path="/works" element={<Works />} />
          <Route path="/review" element={<Review />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </ThemeWrapper>
    </ThemeContext.Provider>
  );
}

export default App;
