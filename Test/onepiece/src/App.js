import './App.css';
import { useState } from 'react';
import React from "react";
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
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
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: "10%" }}>ID</TableCell>
              <TableCell sx={{ width: "35%", textAlign: "center" }}>Name</TableCell>
              <TableCell sx={{ width: "35%", textAlign: "center" }}>Bounty</TableCell>
              <TableCell sx={{ width: "20%", textAlign: "center" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
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
