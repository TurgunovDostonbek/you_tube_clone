import "./PlayVideo.css";
import tabiatVideo from "../../assets/video/vodddeee.mp4";

const PlayVideo = () => {
  return (
    <div className="play_video">
      <video src={tabiatVideo} controls autoPlay muted></video>
    </div>
  );
};

export default PlayVideo;
