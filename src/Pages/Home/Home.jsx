import { useState } from "react";
import Feed from "../../Components/Feed/Feed";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import "./Home.css";

export const Home = ({ sidebar }) => {
  const [category, setCategory] = useState(0);

  return (
    <div>
      <Sidebar
        sidebar={sidebar}
        category={category}
        setCategory={setCategory}
      />
      <div className={`container ${sidebar ? "" : "large_container"}`}>
        <Feed category={category} />
      </div>
    </div>
  );
};

export default Home;
