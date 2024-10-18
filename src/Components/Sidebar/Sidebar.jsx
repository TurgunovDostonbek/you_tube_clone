import "./Sidebar.css";
import { IoHomeOutline } from "react-icons/io5";
import { TfiGame } from "react-icons/tfi";
import { FcAutomotive } from "react-icons/fc";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { SiDcentertainment } from "react-icons/si";
import { GrTechnology } from "react-icons/gr";
import { IoIosMusicalNotes } from "react-icons/io";
import { LiaBlogSolid } from "react-icons/lia";
import { IoNewspaper } from "react-icons/io5";
import islomUz from "../../assets/img/islomuz.png";
import moxirdev from "../../assets/img/moxirdev.png";
import pdp from "../../assets/img/pdp.png";
import qalampir from "../../assets/img/qalampir.jpg";
import najottalim from "../../assets/img/najot talim.ico";
import navo from "../../assets/img/navo.png";

export const Sidebar = ({ sidebar }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small_sidebar"}`}>
      <div className="sidebar_links">
        <div className="side_link">
          <IoHomeOutline className="icon" />
          <p>Home</p>
        </div>

        <div className="side_link">
          <TfiGame className="icon" />
          <p>Gaming</p>
        </div>

        <div className="side_link">
          <FcAutomotive className="icon" />
          <p>Automobile</p>
        </div>

        <div className="side_link">
          <MdOutlineSportsBasketball className="icon" />
          <p>Sports</p>
        </div>

        <div className="side_link">
          <SiDcentertainment className="icon" />
          <p>Entertainment</p>
        </div>

        <div className="side_link">
          <GrTechnology className="icon" />
          <p>Technology</p>
        </div>

        <div className="side_link">
          <IoIosMusicalNotes className="icon" />
          <p>Music</p>
        </div>

        <div className="side_link">
          <LiaBlogSolid className="icon" />
          <p>Blogs</p>
        </div>

        <div className="side_link">
          <IoNewspaper className="icon" />
          <p>News</p>
        </div>
      </div>

      <hr />

      <div className="sidebar_list">
        <h3>Subscriptions</h3>

        <div className="side_link">
          <img src={islomUz} alt="" />
          <p>Islom.Uz</p>
        </div>

        <div className="side_link">
          <img src={moxirdev} alt="" />
          <p>Mohirdev</p>
        </div>

        <div className="side_link">
          <img src={pdp} alt="" />
          <p>PDP</p>
        </div>

        <div className="side_link">
          <img src={qalampir} alt="" />
          <p>Qalampir.Uz</p>
        </div>

        <div className="side_link">
          <img src={navo} alt="" />
          <p>Navo.Tv</p>
        </div>

        <div className="side_link">
          <img src={najottalim} alt="" />
          <p>Najot Talim</p>
        </div>
      </div>
    </div>
  );
};
