import styled from '@emotion/styled'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import axios from 'axios'
import Button from '@mui/material/Button';


function App() {
  return (
    <Container>
      <Box sx={{ bgcolor: '#cfe8fc', height: '100vh'}}>
        <Stack spacing={2}>
    <BodyWrapper>
      <p>Hello</p>
    </BodyWrapper>
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
