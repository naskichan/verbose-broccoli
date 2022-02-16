import styled from '@emotion/styled'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function book(id) {
  //axios call
  console.log("me wants to book id", id)
}

function App() {
  return (
    <Container>
      <Box sx={{ bgcolor: '#cfe8fc', height: '100vh'}}>
        <Stack spacing={2}>
          <Card sx={{ display: 'flex', justifyContent: "space-between", maxHeight: "8rem", margin: "8rem"}}>
          <CardMedia
            component="img"
            image="https://source.unsplash.com/random?concert"
            sx={{ maxWidth: "18rem"}}
            alt="image of a concert"
          />
          <CardContent>
            <Typography variant="h6">
              A veeery long concert name that doesnt seem to stop A concert
            </Typography>
            <Typography variant="body2">
              A description for the concert taking place
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => book(1)} variant='contained' size="small">Book</Button>
          </CardActions>
          </Card>
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
