import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from '@emotion/styled'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import ConcertCard from './components/ConcertCard'


function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/events').then(res => {
      setEvents(res.data)
    })
  }, [])

  function book(id) {
    //axios call
    console.log("me wants to book id", id)
  }
  return (
    <Container>
      <Box sx={{ padding: "4rem"}}>
        {events.map(event => (
          <ConcertCard title={event.eventTitle} date={event.eventDate} city={event.eventCity} onClick={() => book(1)} />
        ))}
      </Box>
    </Container>
  );
}
const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 8rem;
`
const EventsList = styled.div`
  
`

export default App;
