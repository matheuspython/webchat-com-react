import React, { useState, FormEvent } from 'react';
import { Message } from '../Message';

import { Container, App, TextField, Form } from './styles';

interface MessageProps{
  message: string;
  name: string
}

export const Main: React.FC = () => {
  const [messageList, setMessageList] = useState<MessageProps[]>([])
  const [message, setMessage] = useState('')

  const changeMessageState = (newMessage: string) =>  setMessage(newMessage)

  const addMessageList = () => setMessageList([...messageList,{message, name:'marcos'}] )

  return (
    <Container>
      <div className="container">
        <App>
          <TextField>
          {messageList.map(message => (
              <Message 
              key={message.message}
              message={message.message}
              name={message.name}
            />
          ))}


          </TextField>


          <Form>
            <textarea
              placeholder='digite sua mensagem aqui'
              onChange={event => changeMessageState(event.target.value)}
            />
            <button onClick={addMessageList} type='button'>
              enviar
            </button>
          </Form>
        </App>
      </div>
    </Container>
  )
}
