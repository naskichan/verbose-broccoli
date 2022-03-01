import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function ConcertCard(props) {
    const date = new Date(props.date*1000)
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return (
        <Card sx={{ display: 'flex', justifyContent: "space-between", margin: "1rem 0rem 1rem 0rem", maxHeight: "8rem", width: "100%"}}>
          <CardMedia
            component="img"
            image="https://source.unsplash.com/random?concert"
            sx={{ maxWidth: "18rem", maskImage: "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))"}}
            alt="image of a concert"
          />
          <CardContent sx={{ flexGrow: "1" }}>
            <Typography variant="h6" align="left">
              {props.title}
            </Typography>
            <Typography variant="body1" align="left">
              {weekday[date.getDay()]+" the "+date.getDate()+"."+(date.getMonth()+1)+"."+date.getFullYear()}
            </Typography>
            <Typography variant="body1" align="left">
                At: {props.city}
            </Typography>
          </CardContent>
          <CardActions sx={{ display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
            <Button onClick={props.onClick} variant='contained' size="small">Book</Button>
            <Typography variant="body1" align="left">
              {props.ticketCount} {props.ticketCount == 1 ? ("ticket") : ("tickets")} already sold
            </Typography>
          </CardActions>
          </Card>
    )
}

export default ConcertCard