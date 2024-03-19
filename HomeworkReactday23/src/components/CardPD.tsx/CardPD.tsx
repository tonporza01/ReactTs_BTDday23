import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const CardPD = () => {
  return (
    <Row xs={1} md={3} className="g-4 mt-5 mx-5">
      {Array.from({ length: 12 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button href='/Product' className="mx-2" variant="primary">Add Cart</Button>
              <Button href='/Product' className="mx-2" variant="primary">View Product</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default CardPD