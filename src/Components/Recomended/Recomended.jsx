import "./Recomended.css";
import tabiat1 from "../../assets/img/tabiat1.jpg";
import { useEffect, useState } from "react";
import { API_KEY } from "../../data";
import { Link } from "react-router-dom";

const Recomended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
    await fetch(relatedVideo_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="recomended">
      {apiData &&
        apiData.map((item, index) => {
          return (
            <Link
              to={`/video/${item.snippet.categoryId}/${item.id}`}
              key={index}
              className="side_video_list"
            >
              <img src={item.snippet.thumbnails.medium.url} alt="" />
              <div className="vid_info">
                <h4>{item.snippet.title}</h4>
                <p>{item.snippet.channelTitle}</p>
                <p>{item.statistics.viewCount} Views</p>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default Recomended;
