import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie: { id, title, poster_path, backdrop_path } }) {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`/movies/1/${id}`, { replace: true });
  }
  return (
    <Grid item key={ id } xs={ 12 } sm={ 6 } md={ 3 }>
      <Card
        sx={ { height: '100%', display: 'flex', flexDirection: 'column' } }
        onClick={ clickHandler }
      >
        <CardMedia
          component="img"
          sx={ {
            // 16:9
            // pt: '56.25%',
            height: '400px'
          } }
          image={ "https://image.tmdb.org/t/p/w500/" + (poster_path || backdrop_path) }
          alt="random"
        />
        <CardContent sx={ { flexGrow: 1 } }>
          <Typography gutterBottom variant="h5" component="h2" sx={ { textAlign: 'center' } }>
            { title }
          </Typography>
          <Typography>
          </Typography>
        </CardContent>
      </Card>
    </Grid>


  )
}
