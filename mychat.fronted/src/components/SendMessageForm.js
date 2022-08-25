
import { Form, Button, FormControl } from 'react-bootstrap';
import InputGroup from "react-bootstrap/InputGroup";

import {  useState } from 'react';

const SendMessageForm = ({ sendMessage }) => {
    const [message, setMessage] = useState('');

    return <Form
        onSubmit={e => {
            e.preventDefault();
            sendMessage(message);
            setMessage('');
        }}>
        <InputGroup>
           <FormControl type="user" placeholder="Type your message..."
               onChange={e => setMessage(e.target.value)} value={message} />
           <InputGroup.Append>
              <Button variant="primary" type="submit" disabled={!message}>Send</Button>
           </InputGroup.Append>
        </InputGroup>
    </Form>

}
 export default SendMessageForm;
