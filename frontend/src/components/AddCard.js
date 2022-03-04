import { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography';
import DatePicker from '@mui/lab/DatePicker'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function AddCard(props) {
    const [date, setDate] = useState(new Date)
    return (
        <Card sx={{ display: 'flex', justifyContent: "space-between", margin: "1rem 0rem 1rem 0rem", maxHeight: "8rem", width: "100%"}}>
          <CardMedia
            component="img"
            image="https://source.unsplash.com/random?concert"
            sx={{ maxWidth: "18rem", maskImage: "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))"}}
            alt="image of a concert"
          />
          <CardContent sx={{ flexGrow: "1" }}>
            <TextField label="Input" />
            <DatePicker 
            label="Date"
            value={date}
            onChange={(newValue) => {
              setDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
             />
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

export default AddCard