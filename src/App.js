import React, { useState, useEffect } from 'react';
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
  margin: 3rem auto;
  max-width:  25em;
  width:  90vw;
`;

const Form = styled.form`
  display:  flex;
  position: relative;
`;

const Title = styled.label`
  position: absolute;
  bottom: 100%;
  font-size: 1.1rem;
  font-weight: 800;
  margin: 0.2rem;
`;

const Input = styled.input`
  flex-grow: 1;
  font-size:  0.9rem;
  border: 2px solid currentColor;
  outline:  none;

&:placeholder{
  font-family:inherit;
}
&:focus{
  border-color: #005CAF;
}
&:focus + button{
  background-color: #005CAF;
}
`;

const Button = styled.button`
  font-size:0.8rem;
  border: none;
  padding: 0.5rem;
  color: #FAFAFA;
  background-color: #0F2540;
  cursor: pointer;
`;

const AddBtn = styled(Button)`
&:focus{
  outline-color: #005CAF;
  background-color: #005CAF;
  border-radius: 0;
}
`;

const ItemTitle = styled.div`
  font-size:  0.9rem;
  margin: 0.3rem;
  font-weight: 700;
`;

const Item = styled.div`
  display:  flex;
  border-bottom:  1px solid;
  font-size:  0.9rem;
`;

const ItemText = styled.div`
  display:  flex;
  flex-grow:  1;
  align-items:  center;
`;

const ItemBtn = styled.div`
  cursor: pointer;
  margin: 6px 5px;
`;

const handleEdit = (id, text) => {
}

const handleDelete = (id) => {
}

const handleCheck = (id,state) => {
}

const Add = ({ addTodo }) => {
  const [value, setValue] = useState('');
  return (
    <Form onSubmit={(e) => {
      e.preventDefault();
      addTodo(value);
      setValue('')
    }}>
      <Title htmlFor="add__input">
        代辦清單
      </Title>
      <Input
        id="add__input"
        name="add__input"
        type="text"
        placeholder="請輸入待辦事項"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <AddBtn >
        <FontAwesomeIcon className="fa-2x" icon={faPlusSquareRegular} />
      </AddBtn>
    </Form >
  );
}

const Wait = (props) => {
  return (
    <div>
      <ItemTitle>代辦項目</ItemTitle>
      <Item key={123}>
        <ItemText>testestestsee</ItemText>
        <ItemBtn><FontAwesomeIcon className="fa-lg" icon={faEditSolid} onClick={() => { handleEdit() }} /></ItemBtn>
        <ItemBtn><FontAwesomeIcon className="fa-lg" icon={faTrashAltSolid} onClick={() => { handleDelete() }} /></ItemBtn>
        <ItemBtn><FontAwesomeIcon className="fa-lg" icon={faCheckSquareRegular} onClick={() => { handleCheck() }} /></ItemBtn>
      </Item >
      {
        props.todoList.map((list) => {
          return (
            list.state ? '' :
              <Item key={list.id}>
                <ItemText>{list.value}</ItemText>
                <ItemBtn><FontAwesomeIcon className="fa-lg" icon={faEditSolid} onClick={() => { handleEdit(list.id, list.value) }} /></ItemBtn>
                <ItemBtn><FontAwesomeIcon className="fa-lg" icon={faTrashAltSolid} onClick={() => { handleDelete(list.id) }} /></ItemBtn>
                <ItemBtn><FontAwesomeIcon className="fa-lg" icon={faCheckSquareRegular} onClick={() => { handleCheck(list.id, list.state) }} /></ItemBtn>
              </Item>
          )
        })
      }
    </div >
  );
}

const Done = (props) => {
  return (
    <div>
      <ItemTitle>完成項目</ItemTitle>
      <Item key={444}>
        <ItemText>dddd</ItemText>
        <ItemBtn><FontAwesomeIcon className="fa-lg" icon={faTrashAltSolid} /></ItemBtn>
        <ItemBtn><FontAwesomeIcon className="fa-lg" icon={faCheckSquareSolid} /></ItemBtn>
      </Item>
      {props.todoList.map((list) => {
        return (
          !list.state ? '' :
            <Item key={list.id}>
              <ItemText>{list.value}</ItemText>
              <ItemBtn><FontAwesomeIcon className="fa-lg" icon={faTrashAltSolid} onClick={() => { handleDelete(list.id) }} /></ItemBtn>
              <ItemBtn><FontAwesomeIcon className="fa-lg" icon={faCheckSquareSolid} onClick={() => { handleCheck(list.id, list.state) }} /></ItemBtn>
            </Item>
        )
      })}
    </div>
  );
}

const setUUID = () => {
  var d = Date.now();
  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    d += performance.now();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}


const App = () => {
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    return (() => {
    })
  })

  return (
    <Container>
      <Add addTodo={(text) => {
        if (text.length > 0) {
          setTodoList([...todoList,
          {
            id: setUUID(),
            value: text,
            state: false,
          }
          ])
        }
      }} />
      <Wait todoList={todoList} />
      <Done todoList={todoList} />
    </Container>
  );
}

export default App;
