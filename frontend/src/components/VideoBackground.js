
import {  useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  
  // fetch trailer video && updating the store with trailer video data
  // throuth this custom hook
  useMovieTrailer(movieId);    
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  return (
      
    <div className="w-full">
      <iframe
        className="w-full md:h-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key +"?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
