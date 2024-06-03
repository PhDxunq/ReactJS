import './App.css';
import LoginForm from './LoginForm';
import DataFetcher from './DataFetcher';
import { NavLink, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import List from './List';
import { useState } from 'react';
function App() {
  const [listItem,setListItem] = useState([
    {
      id: "1",
      target: "Learn ReactJS basics",
      check: false
    },
    {
      id: "2",
      target: "Practice ReactJS",
      check: false
    },
    {
      id: "3",
      target: "Learn Redux",
      check: false
    },
    {
      id: "4",
      target: "Code portfolio in React",
      check: false
    },
    {
      id: "5",
      target: "Learn React Native",
      check: false
    }
  ]);
  return (
    <div className="App">
      <h1>Bài 1</h1>
      <LoginForm></LoginForm>
      <hr></hr>
      <h1>Bài 2</h1>
      <DataFetcher></DataFetcher>
      <hr></hr>
      <h1>Bài 3</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink style={{marginLeft:"20px"}} to="/About">About</NavLink>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/About" element={<About/>}></Route>
        </Routes>
        <hr></hr>
        <h1>Bài 4</h1>
        <List props={{listItem,setListItem}}></List>
    </div>
  );
}

export default App;
