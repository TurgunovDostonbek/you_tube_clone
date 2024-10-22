import { useParams } from "react-router-dom";
import PlayVideo from "../../Components/PlayVideo/PlayVideo";
import Recomended from "../../Components/Recomended/Recomended";
import "./Video.css";

export const Video = () => {
  const { videoId, categoryId } = useParams();
  console.log(videoId, categoryId);

  return (
    <div className="play_container">
      <PlayVideo videoId={videoId} />
      <Recomended />
    </div>
  );
};

export default Video;
