import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Card } from 'react-bootstrap';

const profile = () => {
  return (
<div className="profile">
<Card style={{ width: '25rem' , marginLeft:'35%',marginTop:'7%'}}>
  <Card.Img variant="top" src="./juve.jpg"  />
  <Card.Body>
    <Card.Title>Federico Chiesa</Card.Title>
    <Card.Text>
    Player Footall
    </Card.Text>
    <Card.Text>
    born 25 October 1997 is an Italian professional footballer who plays as a winger for Serie A club Juventus.
    </Card.Text>
  </Card.Body>
</Card>

</div>
  );
}

export default profile;
