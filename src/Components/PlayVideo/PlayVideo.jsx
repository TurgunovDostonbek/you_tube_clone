import "./PlayVideo.css";
import user from "../../assets/img/user.png";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { FaShare } from "react-icons/fa";
import { MdSaveAlt } from "react-icons/md";
import { useEffect, useState } from "react";
import { API_KEY } from "../../data";

const PlayVideo = ({ videoId }) => {
  const [apiData, setApiData] = useState(null);
  const [commentData, setCommentData] = useState(null);

  // Fetching Video Data
  const fetchVideoData = async () => {
    const videoDetalist_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetalist_url).then((res) =>
      res.json().then((data) => setApiData(data))
    );
  };

  // Fetching Comment Data
  const fetchCommentData = async () => {
    const videoComment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;

    await fetch(videoComment_url)
      .then((res) => res.json())
      .then((data) => setCommentData(data.items));
  };

  useEffect(() => {
    fetchCommentData();
  }, [apiData]);

  // Fetching Video Data => useEffect..?
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
      <h3>{"Title Hero"}</h3>
      <div className="play_video_info">
        <p>
          {"16K"} Views &bull; {"2 day ago"}
        </p>
        <div>
          <span>
            <BiLike className="icon" /> {2585}
          </span>
          <span>
            <BiDislike className="icon" /> {2}
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
          <p>{"Turgunov Dostonbek"}</p>
          <span>{"1M"} Subscribers</span>
        </div>
        <button>Subscribers</button>
      </div>

      <div className="vid_description">
        <p>{"Channell Description"}</p>
        <hr />
        <h4>{130} Comments</h4>

        {commentData &&
          commentData.map((item, index) => {
            return (
              <div key={index} className="comment">
                <img
                  src={
                    item.snippet.topLevelComment.snippet.authorProfileImageUrl
                  }
                  alt=""
                />
                <div>
                  <h3>
                    {item.snippet.topLevelComment.snippet.authorDisplayName}{" "}
                    <span>1 day ago</span>
                  </h3>
                  <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                  <div className="comment_action">
                    <BiLike className="icon" />
                    <span>
                      {item.snippet.topLevelComment.snippet.likeCount}
                    </span>
                    <BiDislike className="icon" />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default PlayVideo;
