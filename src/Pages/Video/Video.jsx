import PlayVideo from "../../Components/PlayVideo/PlayVideo";
import Recomended from "../../Components/Recomended/Recomended";
import "./Video.css";

export const Video = () => {
  return (
    <div className="play_container">
      <PlayVideo />
      <Recomended />
    </div>
  );
};

export default Video;
