
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';

const Checkout = () => {
  return (
    <>
    <div className="px-4 pt-5 my-5 text-center border-bottom">
    <h1 className="display-4 fw-bold">Centered screenshot</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
    </div>
  </div>

   <div className="col-md-7 col-lg-8 ms-5">
  <h2 className="mb-3">Billing address</h2>
  <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formFirstName">
          <Form.Label>First name</Form.Label>
          <Form.Control type="name" placeholder="first name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formLastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control type="name" placeholder="last name" />
        </Form.Group>
      </Row>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
      </InputGroup>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <hr className='mt-4'/>
      {['checkbox', 'checkbox'].map((type) => (
        <div key={type} className="mb-3">
          <Form.Check type={type} id={`check-api-${type}`}>
            <Form.Check.Input type={type} isValid />
            <Form.Check.Label>{`Custom api ${type}`}</Form.Check.Label>
            <Form.Control.Feedback type="valid">
              You did it!
            </Form.Control.Feedback>
          </Form.Check>
        </div>
      ))}
      <hr className='mt-4'/>
       <h4 className='mb-4'>Payment</h4>
       {['radio', 'radio','radio'].map((type) => (
        <div key={type} className="mb-3">
          <Form.Check type={type} id={`check-api-${type}`}>
            <Form.Check.Input type={type} isValid />
            <Form.Check.Label>{`Custom api ${type}`}</Form.Check.Label>
            <Form.Control.Feedback type="valid">
              You did it!
            </Form.Control.Feedback>
          </Form.Check>
        </div>
      ))}
      <hr className='mt-4'/>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </>
  )
}

export default Checkout