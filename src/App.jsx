import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";
import { useState } from "react";

export const App = () => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  );
};
