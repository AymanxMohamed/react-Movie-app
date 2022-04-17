import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import axiosInstance from "../network/axiosConfig";
import MainLayout from "../components/MainLayout";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import MovieCard from "../components/MovieCard";
import MovieDetails from '../components/MovieDetails';

export default function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({})
  useEffect(() => {
    axiosInstance.get(`/${ id }`).then(res => setMovie(res.data)).catch(err => console.log(err));
  }, []);
  console.log(movie);

  return (
    <MainLayout>
      <Grid container spacing={ 4 }>
        <MovieCard movie={movie} />
        <MovieDetails movie={movie} />
      </Grid>
    </MainLayout>

  )
}
