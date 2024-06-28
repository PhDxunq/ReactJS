import './App.css';
import { useState } from 'react';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Characters from './Characters';
import SaveCharacter from './SaveCharacter';


function App() {
  const [characters, setCharacters] = useState([
    { id: 1, name: 'Monkey D. Luffy', bounty: '1,500,000,000' },
    { id: 2, name: 'Roronoa Zoro', bounty: '320,000,000' },
    { id: 3, name: 'Nami', bounty: '66,000,000' },
    { id: 4, name: 'Usopp', bounty: '200,000,000' },
    { id: 5, name: 'Sanji', bounty: '330,000,000' }
  ]);
  const [updateCharacter,setUpdateCharacter] = useState({
    id: 0,
    name: "",
    bounty: ""
  });
  return (
    <div className='container'>
      <h2>Add/Edit Character</h2> 
      <SaveCharacter characters = {characters} setCharacters = {setCharacters}  updateCharacter = {updateCharacter} setUpdateCharacter={setUpdateCharacter}  ></SaveCharacter>
      <h2>One Piece Characters</h2>
      <table className='table table-striped w-75'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Bounty</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
          characters.map((character) => {
          return (
            <>
              <Characters key={character.id} characters={character} updateCharacter = {updateCharacter} setUpdateCharacter={setUpdateCharacter} />
            </>
          )
        })}
        </tbody>
      </table>
    </div>
  )
}
export default App;
