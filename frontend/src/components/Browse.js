import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearchPage from "./GptSearchPage";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useTrendingTVShows from "../hooks/useTrendingTVShows";

{
  /*

          header

          gpt search === true
              show gpt search page
          
          else
              main container
              - video background
              - videotitle

              secondary container
              - movielist * n
              - cards*n

      */
}

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  // fetch data from tmdb api and update the store through the custom hook

  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  useTrendingMovies();
  useTrendingTVShows();
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      {!showGptSearch ? (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      ) : (
        <GptSearchPage />
      )}
    </div>
  );
};

export default Browse;
