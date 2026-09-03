import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import CounterApp from '../components/CounterApp'

function App() {
  const [name, setName] = useState('');

  return (
    <>
      <CounterApp />
      <label htmlFor="">name</label>
      <input onChange={(e) =>  setName(e.target.value)} type="" name="" id="" />
      <p>{name}</p>

      {/* <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label> 
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className='ms-5'>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form> */}
    </>
  );
}

export default App
