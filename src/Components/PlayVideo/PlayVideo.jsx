import "./PlayVideo.css";
import tabiatVideo from "../../assets/video/vodddeee.mp4";
import user from "../../assets/img/user.png";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { FaShare } from "react-icons/fa";
import { MdSaveAlt } from "react-icons/md";

const PlayVideo = () => {
  return (
    <div className="play_video">
      <video src={tabiatVideo} controls autoPlay muted></video>
      <h3>Lorem ipsum dolor sit amet consectetur.</h3>
      <div className="play_video_info">
        <p>1525 Views &bull; 2day ago</p>
        <div>
          <span>
            <BiLike className="icon" /> 125
          </span>
          <span>
            <BiDislike className="icon" /> 2
          </span>
          <span>
            <FaShare className="icon" /> Share
          </span>
          <span>
            <MdSaveAlt className="icon" /> Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={user} alt="" />
        <div>
          <p>Turgunov Dostonbek</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribers</button>
      </div>
      <div className="vid_description">
        <p>Chanel that makes learning Easy</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          maxime.
        </p>
        <hr />
        <h4>130 Comments</h4>
        <div className="comment">
          <img src={user} alt="" />
          <div>
            <h3>
              Abduraxmonov R <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              ullam consectetur vel amet fugiat aliquid placeat soluta nesciunt
              voluptate aliquam?
            </p>
            <div className="comment_action">
              <BiLike className="icon" />
              <span>244</span>
              <BiDislike className="icon" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user} alt="" />
          <div>
            <h3>
              Abduraxmonov R <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              ullam consectetur vel amet fugiat aliquid placeat soluta nesciunt
              voluptate aliquam?
            </p>
            <div className="comment_action">
              <BiLike className="icon" />
              <span>244</span>
              <BiDislike className="icon" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user} alt="" />
          <div>
            <h3>
              Abduraxmonov R <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              ullam consectetur vel amet fugiat aliquid placeat soluta nesciunt
              voluptate aliquam?
            </p>
            <div className="comment_action">
              <BiLike className="icon" />
              <span>244</span>
              <BiDislike className="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
