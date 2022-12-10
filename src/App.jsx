import React, { useState } from 'react';
import './App.css';
import CustomButton from './components/CustomButton/CustomButton';
import User from './components/User/User';

function App() {
  const [users, setUsers] = useState([
    { id : 1, age : 30, name : "송중기"},
    { id : 2, age : 24, name : "송강"},
    { id : 3, age : 10, name : "김유정"},
    { id : 4, age : 15, name : "구교환"},
  ]);
  const [name, setName] = useState("")
  const [age, setAge] = useState("")

  const addUserHandler = () => {
    const newUser = {
      id : users.length + 1,
      age : age,
      name, name,
    }
    setUsers([...users, newUser])
  }

  const deleteUserHandler = (id) => {
    const newUserList = users.filter(user => user.id !== id);
    // filter()는 true값만 반환함. 근데 여기서는 user.id !== id << false를 반환함. 따라서 해당 filter함수는 매개변수로 id를 넘겨주고, user를 돌면서 찾은 user.id와 내가 매개변수로 넘겨준 id가 같지 않은 것만 걸러줌.(true)
    // console.log(id)
    setUsers(newUserList)
  } // 매개변수 id가 어떤 것을 의미하는지? user.id !== id는 어떤 것을 비교하는건가?

  return (
    <div className="container">
      {users.map((user) => {
        if(user.age <= 25) {       
          return <User user={user} key={user.id} age={user.age} handleDelete={deleteUserHandler}/>;
        } else {
          return null;
        }
      })}
      <div className='input-container'>
        <input
          value={name}
          placeholder="이름을 입력해주세요."
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <input
          value={age}
          placeholder="나이를 입력해주세요."
          onChange={(e) => {
            setAge(e.target.value);
          }}
        ></input>
        <CustomButton color="green" onClick={addUserHandler}>추가하기</CustomButton>
      </div>
    </div>
  ); 
}
//

export default App;
// const vegetables = ['감자','고구마','오이','가지','콩나물'];
{/* <Card name="감자"/>
      <Card name="고구마"/>
      <Card name="오이"/>
      <Card name="가지"/>
      <Card name="콩나물"/> */}

      {/* {vegetables.map((vegetableName) => {
        return (
          <div key={vegetableName}>{vegetableName}</div>
        )
      })} */}