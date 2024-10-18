import Feed from "../../Components/Feed/Feed";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import "./Home.css";

export const Home = ({ sidebar }) => {
  return (
    <div>
      <Sidebar sidebar={sidebar} />
      <div className={`container ${sidebar ? "" : "large_container"}`}>
        <Feed />
      </div>
    </div>
  );
};

export default Home;
