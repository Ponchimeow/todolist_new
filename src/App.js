import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlusSquare as faPlusSquareSolid,
  faTrashAlt as faTrashAltSolid,
  faEdit as faEditSolid,
  faCheckSquare as faCheckSquareSolid,
} from '@fortawesome/free-solid-svg-icons';
import {
  faPlusSquare as faPlusSquareRegular,
  faCheckSquare as faCheckSquareRegular,
} from '@fortawesome/free-regular-svg-icons';
import './App.css';

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
  font-weight: 800;
  margin: 0.2rem;
`;

const Input = styled.input`
flex-grow: 1;
font-size:0.9rem;
border: 2px solid currentColor;
outline:none;

&:placeholder{
  font-family:inherit;
}
&:focus{
  border-color: #005CAF;
}
`;

const Button = styled.button`
font-size:0.9rem;
border: none;
padding: 0.5rem;
color: #FAFAFA;
background-color: #0F2540;
cursor: pointer;
`;

const AddBtn = styled(Button)`
&:focus{
  background-color: #005CAF;
}
`;

const Add = () => {
  return (
    <Header className="add">
      <Title for="add__input">代辦清單</Title>
      <Input id="add__input" type="text" placeholder="請輸入待辦事項" />
      <AddBtn className="btn add__btn" onclick="">
        <FontAwesomeIcon className="fa-lg" icon={faPlusSquareRegular} />
      </AddBtn>
    </Header>
  );
}

const Wait = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faEditSolid} />
      <FontAwesomeIcon icon={faTrashAltSolid} />
      <FontAwesomeIcon icon={faCheckSquareRegular} />
    </div>
  );
}

const Done = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faTrashAltSolid} />
      <FontAwesomeIcon icon={faCheckSquareSolid} />
    </div>
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
