import React from 'react';
import { NavLink } from 'react-router-dom';
import Counter from './Counter';
import DataFetcher from './DataFetcher';
import { Routes, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import List from './List';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

function App() {
  const arrayList = [
    {
      "id" : "1",
      "artistName": "foo",
      "genres" : "pop",
      "numberOfTracks" : 12,
      "title" : "album_one"
    },
    {
      "id" : "1",
      "artistName": "foo",
      "genres" : "pop",
      "numberOfTracks" : 15,
      "title" : "album_two"
    },
    {
      "id" : "2",
      "artistName": "bar",
      "genres" : "rock",
      "numberOfTracks" : 15,
      "title" : "album_rock"
    },
    {
      "id" : "3",
      "artistName": "dj",
      "genres" : "hip hop",
      "numberOfTracks" : 7,
      "title" : "album_dj"
    },
  ]
  return (
    <div className="App">
      <h1>Bài 1</h1>
      <Counter></Counter>
      <hr></hr>
      <h1>Bài 2</h1>
      <DataFetcher></DataFetcher>
      <h1>Bài 3</h1>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
      </Routes>
      <hr></hr>
      <h1>Bài 4</h1>
      <List key={arrayList.id} prop={arrayList}></List>
      <hr></hr>
      <h1>Bài 5</h1>
      <Header></Header>
      <Navigation></Navigation>
      <Footer></Footer>
    </div>
  );
}

export default App;
