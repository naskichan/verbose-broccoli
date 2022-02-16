import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from '@emotion/styled'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import ConcertCard from './components/ConcertCard'


function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/events').then(res => {
      console.log(res)
    })
  })

  function book(id) {
    //axios call
    console.log("me wants to book id", id)
  }
  return (
    <Container>
      <Box sx={{ bgcolor: '#cfe8fc', height: '100vh'}}>
        <Stack spacing={2}>
          <ConcertCard title="A veeery long concert name" description="A description for the concert taking place" onClick={() => book(1)} />
        </Stack>
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
