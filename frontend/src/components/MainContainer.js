import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  if (!movies) return;
  
  // const randomMovie = movies[Math.floor(Math.random() * movies.length)];
  const randomMovie = movies[0];

  
  const {original_title, overview, id} = randomMovie
  

  return (
    <div className=" pt-[30%] bg-gray-900 md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
