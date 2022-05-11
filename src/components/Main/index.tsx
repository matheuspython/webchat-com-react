import React from 'react';
import { Message } from '../Message';

import { Container, App, TextField, Form } from './styles';

export const Main: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <App>
          <TextField>
            <Message 
              message='minha mensageeeeeeemmmmm'
              name='marcos'
            />
               <Message 
              message='minha mensageeeeeeemmmmm'
              name='marcos'
            />
               <Message 
              message='minha mensageeeeeeemmmmm'
              name='marcos'
            />
               <Message 
              message='minha mensageeeeeeemmmmm'
              name='marcos'
            />
               <Message 
              message='minha mensageeeeeeemmmmm'
              name='marcos'
            />
               <Message 
              message='minha mensageeeeeeemmmmm'
              name='marcos'
            />
               <Message 
              message='minha mensageeeeeeemmmmm'
              name='marcos'
            />
               <Message 
              message='minha mensageeeeeeemmmmm'
              name='marcos'
            />
      
          </TextField>


          <Form>
            <textarea 
              placeholder='digite sua mensagem aqui'
            />
            <button type='button'>
              enviar
            </button>
          </Form>
        </App>
      </div>
    </Container>
  )
}
