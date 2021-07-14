import React from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getUpcomingMovies } from "../api/tmdb-api";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner';
import AddtoWatchListIcon from '../components/cardIcons/addToWatchlist'

const UpcomingMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcomingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;
  console.log(data);

  return (
    <PageTemplate
      title='Discover Upcoming Movies'
      movies={movies}
      action={(movie) => {
        return <AddtoWatchListIcon movie={movie} />
      }}
    />
  );
};
export default UpcomingMoviesPage;