import "./PlayVideo.css";
import tabiatVideo from "../../assets/video/vodddeee.mp4";
import user from "../../assets/img/user.png";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { FaShare } from "react-icons/fa";
import { MdSaveAlt } from "react-icons/md";
import { useEffect, useState } from "react";
import { API_KEY } from "../../data";

const PlayVideo = ({ videoId }) => {
  const [apiData, setApiData] = useState(null);
  // console.log(apiData);

  const fetchVideoData = async () => {
    const videoDetalist_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetalist_url).then((res) =>
      res.json().then((data) => setApiData(data))
    );
  };

  useEffect(() => {
    fetchVideoData();
  }, [apiData]);

  return (
    <div className="play_video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h3>Title Here </h3>
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
