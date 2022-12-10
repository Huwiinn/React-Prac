import React, { useState } from 'react';
import './App.css';

function App() {
  return(
    <div>
      <GrandFather/>
      <App2/>
      <Count/>
    </div>
  ) 
}

function Child(props) {
  return (
    <div>
      <button onClick={
        () => {
          props.setName('송강')
        }
      }>이름 바꾸기</button>
      <div>{props.grandFatherName}</div>
    </div>
  )
}

function Mother(props) {
  return <Child grandFatherName = {props.grandFatherName} setName = {props.setName}
  />
}

function GrandFather() {
  // const [value, setValue] = useState (초기값)
  const [name, setName] = useState('송강호'); // 요거 state
  // console.log(name);
  return <Mother grandFatherName={name} setName={setName} />
}


function App2(){
  const onClickHandler = () => {
    setName('안토니')
  }
  const [name, setName] = useState("네이마르")

  const [value, setValue] = useState("");
  const onChangeHandler = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
  }
  console.log(value);

  return (
    <div>{name}
      <button onClick={onClickHandler}>Button</button>
      <input type='text' onChange={onChangeHandler} value={value} />
    </div>
  )
}

export function Count() {
  const [number, setNumber] = useState(0)

  return (
    <div>
      {number}
      <button onClick={() => {setNumber(number + 1)}}>Up</button>
      <button onClick={() => {setNumber(number - 1)}}>Down</button>
    </div>
  );
}


export default App;
