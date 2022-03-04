import { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'
import DatePicker from '@mui/lab/DatePicker'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function AddCard(props) {
  const [title, setTitle] = useState()
  const [date, setDate] = useState()
  const [location, setLocation] = useState()
  function handleClick() {
    const data = {
      eventTitle: title,
      eventDate: date.$d.getTime(),
      eventLocation: location
    }
    props.onDataSubmit(data)
  }
  //Could do this nicer with generating as many inputs as there are arguments
  return (
      <Card sx={{ display: 'flex', justifyContent: "space-between", margin: "1rem 0rem 1rem 0rem", maxHeight: "8rem", width: "100%"}}>
        <CardMedia
          component="img"
          image="https://source.unsplash.com/random?concert"
          sx={{ maxWidth: "18rem", maskImage: "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))"}}
          alt="image of a concert"
        />
        <CardContent sx={{ flexGrow: "1" }}>
          <TextField label="Title" onChange={(newValue) => {setTitle(newValue.target.value)}} />
          <DatePicker 
          label="Date"
          value={date}
          onChange={(newValue) => { setDate(newValue) }}
          renderInput={(params) => <TextField {...params} />}
            />
          <TextField label="Location" onChange={(newValue) => {setLocation(newValue.target.value)}} /> 
          
        </CardContent>
        <CardActions sx={{ display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
          <Button onClick={handleClick} variant='contained' size="small">Submit</Button>
        </CardActions>
        </Card>
  )
}

export default AddCard