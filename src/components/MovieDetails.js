import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function MovieDetails({ movie: { id, title, overview, release_date } }) {
  return (
    <Grid item key={ id } xs={ 12 } sm={ 6 } md={ 9 }>
      <Card
        sx={ { height: '100%', display: 'flex', flexDirection: 'column' } }
      >
        <CardContent sx={ { flexGrow: 1 } }>
          <Typography gutterBottom variant="h5" component="h2" sx={ { textAlign: 'center' } }>
            { title }
          </Typography>
          <Typography gutterBottom  sx={ { textAlign: 'center', fontSize: '2rem' } }>
            Over View: { overview }
          </Typography>
          <Typography gutterBottom  sx={ { textAlign: 'center' } }>
            Release Date: { release_date }
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}
