import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from '@emotion/styled'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import ConcertCard from './components/ConcertCard'


function App() {
  const [events, setEvents] = useState([]);
  const [shouldUpdate, setShouldUpdate] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:3000/events').then(res => {
      setEvents(res.data)
    })
  }, [shouldUpdate])

  function book(id) {
    //axios call
    axios.post('http://localhost:3000/ticket', {
      "firstName": "John",
      "lastName": "Doe",
      "eventId": id
    }).then(() => {
      setShouldUpdate(current => !current)
    })
  }
  return (
    <Container>
      <Box sx={{ padding: "4rem"}}>
        {events.map((event, index) => (
          <ConcertCard key={index} title={event.eventTitle} date={event.eventDate} city={event.eventCity} ticketCount={event.tickets.length} onClick={() => book(index)} />
        ))}
      </Box>
      <Box sx={{ padding: "4rem"}}>
        <AddCard onClick={addEvent}/>
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
