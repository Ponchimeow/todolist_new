import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin:3rem auto;
  max-width:25em;
  width:90vw;
`;

const Header = styled.div`
  display:flex;
  position:relative;
`;

const Title = styled.label`
  position:absolute;
  bottom:100%;
  font-size: 0.9rem;
  margin: 0.2rem;
`;

const Input = styled.input`

`;

const Button = styled.button`
width:50px;
background: #ccc;
`;

const Add = () => {
  return (
    <Header className="add">
      <Title for="add__input">Task</Title>
      <input id="add__input" type="text" placeholder="請輸入待辦事項" />
      <Button className="btn btn--add" onclick="">Add</Button>
    </Header>
  );
}

const Wait = () => {
  return (
    <></>
  );
}

const Done = () => {
  return (
    <></>
  );
}

const App = () => {
  return (
    <Container>
      <Add />
      <Wait />
      <Done />
    </Container>
  );
}

export default App;
