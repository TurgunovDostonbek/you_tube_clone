import "./Navbar.css";
import { CiMenuBurger } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { FaVideo } from "react-icons/fa6";
import Profile_User from "../../assets/img/user.png";
import { Link } from "react-router-dom";

export const Navbar = ({ setSidebar }) => {
  return (
    <nav className="flex-div">
      <div className="nav_left flex-div">
        <CiMenuBurger
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
          className="menu_icon"
        />
        <Link to="/" className="nav_left_logo flex-div">
          <FaYoutube className="logo" /> YouTube
        </Link>
      </div>

      <div className="nav_middle flex-div">
        <div className="search_box flex-div">
          <input type="text" placeholder="Search" />
          <CiSearch className="Search" />
        </div>
      </div>

      <div className="nav_right flex-div">
        <FaVideo className="icons_video" />
        <IoIosNotifications className="icons" />
        <img className="user_icon" src={Profile_User} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
