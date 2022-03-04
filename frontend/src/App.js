import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from '@emotion/styled'
import Container from '@mui/material/Container'
import ConcertCard from './components/ConcertCard'
import DateAdapter from '@mui/lab/AdapterDayjs';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AddCard from './components/AddCard'


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
  function submit(data) {
    console.log(data)
  }
  function addEvent(values) {
    return null
  }
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <Container sx={{ marginTop: "8rem" }}>
        <Content>
          {events.map((event, index) => (
            <ConcertCard key={index} title={event.eventTitle} date={event.eventDate} city={event.eventCity} ticketCount={event.tickets.length} onClick={() => book(index)} />
          ))}
        </Content>
        <Content>
          <AddCard onClick={addEvent} onDataSubmit={(data) => submit(data)}/>
        </Content>
      </Container>
    </LocalizationProvider>
  );
}
const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  
`
const Content = styled.div`
  background-color: #424242;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 3rem 4rem 3rem 4rem;
  border-radius: 8px;
  margin: 2rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`

export default App;
