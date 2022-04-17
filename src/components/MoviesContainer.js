import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Grid from "@mui/material/Grid";
import MovieCard from "./MovieCard";
import axiosInstance from "../network/axiosConfig";
import { Pagination } from '@mui/material';

export default function MoviesContainer() {
  let pageNo = useParams().page || 1;
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axiosInstance.get(`/movie/popular?page=${ pageNo }`)
    .then((res) => {
      setMovies(res.data.results)
    })
    .catch((error) => console.log(error))
  }, [pageNo])

  const MoviesCard = movies.map(movie => {
    return <MovieCard key={ movie.id } movie={ movie } />
  })

  const changeHandler = (event, value) => {
    navigate(`/movies/${value}`, { replace: true });
  }

  return (
    <>
      <Grid container spacing={ 4 }>{ MoviesCard }</Grid>
      <Pagination count={ 200 } onChange={ changeHandler } page={ +pageNo } variant="" shape="rounded"/>
    </>
  )
}
