import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function ConcertCard(props) {
    return (
        <Card sx={{ display: 'flex', justifyContent: "space-between", maxHeight: "8rem", margin: "8rem"}}>
          <CardMedia
            component="img"
            image="https://source.unsplash.com/random?concert"
            sx={{ maxWidth: "18rem"}}
            alt="image of a concert"
          />
          <CardContent sx={{ flexGrow: "1" }}>
            <Typography variant="h6" align="left">
              {props.title}
            </Typography>
            <Typography variant="body2" align="left">
              {props.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={props.onClick} variant='contained' size="small">Book</Button>
          </CardActions>
          </Card>
    )
}

export default ConcertCard