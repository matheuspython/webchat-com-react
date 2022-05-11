import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  .container{
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center

  }
`;

export const App = styled.div`
  height: 80vh;
  background-color: #fff;
  width: 100%;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 5px;
`

export const TextField = styled.div`
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar{
    width:6px;
  }
  ::-webkit-scrollbar-thumb{
    background-color: #283754;
    border-radius:6px;
  }
  ::-webkit-scrollbar-track{
    background-color:#80899b;
  }
`

export const Form = styled.form`
  width: 100%;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  textarea{
    width: 90%;
    padding: 5px;
    resize: vertical;
  }

  button{
    width: 90px;
    height: 35px;
    border-radius: 12px;
    border: 0;
    background-color: #1d54ca;
    color: #fff;
    cursor: pointer;
    transition: .4s;
    &:hover{
      background-color: #547fdb;
    }
  }
`