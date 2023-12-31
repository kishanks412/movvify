import React from "react";
import MovieVideo from "./MovieVideo";
import MovieInformation from "./MovieInformation";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import useMovieVideo from "../hooks/useMovieVideo";
import useMovieInformation from "../hooks/useMovieInformation";
import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useCastDetails from "../hooks/useCastDetails";
import CrewPage from "./Crewpage";
import Header2 from "./Header2";

const MovieDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  useMovieVideo(id, API_OPTIONS);
  useMovieInformation(id, API_OPTIONS);
  useCastDetails(id, API_OPTIONS);
  const movieClip = useSelector((store) => store?.movies?.movieVideo?.key);
  const movieDetails = useSelector((store) => store?.movies?.movieDetails);
  const castAndCrew = useSelector((store) => store?.movies?.castDetails);
  if (!movieDetails) return null;
  if (!castAndCrew) return null;

  const handlePageNavigate = () => {
    navigate("/browse");
  };

  return (
    <>
      <Header2 />
      <div className="bg-black text-white">
        <div
          className=" p-5 z-50 right-28 left-0 top-3 md:right-48 md:left-16 md:top-5 lg:left-8 lg:top-6 "
          onClick={handlePageNavigate}
        >
          <a
            href="#_"
            className="relative inline-flex items-center justify-center p-2 px-3 py-1 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out shadow-md group md:p-1 md:px-4 md:py-1 rounded-md  md:border-[1px] md:border-[#f47f7f90]  lg:p-4 lg:px-6 lg:py-2"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#E50914] group-hover:translate-x-0 ease">
              {<MoveLeft strokeWidth={1} />}
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-white text-[10px] transition-all duration-300 transform group-hover:translate-x-full ease md:text-[13px] lg:text-[16px] bg-[#E50914]">
              Homepage
            </span>
            <span className="relative invisible">GPT Search</span>
          </a>
        </div>
        <MovieInformation details={movieDetails} />
        <MovieVideo videoKey={movieClip} details={movieDetails} />

        {castAndCrew ? (
          <CrewPage crew={castAndCrew.crew} cast={castAndCrew.cast} />
        ) : (
          <h1>Crew Details Not Found </h1>
        )}
      </div>
    </>
  );
};

export default MovieDetails;
