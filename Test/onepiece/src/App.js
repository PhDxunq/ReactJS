import './App.css';
import { useState } from 'react';
import React from "react";
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
    <>
      <SaveCharacter prop={{ characters, setCharacters,updateCharacter,setUpdateCharacter}}></SaveCharacter>
      <h2>One Piece Characters</h2>

        <table>
          <th>
            <tr>
              <td sx={{ width: "10%" }}>ID</td>
              <td sx={{ width: "35%", textAlign: "center" }}>Name</td>
              <td sx={{ width: "35%", textAlign: "center" }}>Bounty</td>
              <td sx={{ width: "20%", textAlign: "center" }}>Actions</td>
            </tr>
          </th>
        </table>
      {characters.map((item) => {
        return (
          <>
              <Characters prop={{item,setUpdateCharacter}}></Characters>
          </>
        )
      })}
    </>
  )
}
export default App;
