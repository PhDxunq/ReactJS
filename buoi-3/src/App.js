import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Character from './Character';
import SaveCharacter from './SaveCharacter';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [characters, setCharacters] = useState([
    { id: 1, name: 'Monkey D. Luffy', bounty: '1,500,000,000' },
    { id: 2, name: 'Roronoa Zoro', bounty: '320,000,000' },
    { id: 3, name: 'Nami', bounty: '66,000,000' },
    { id: 4, name: 'Usopp', bounty: '200,000,000' },
    { id: 5, name: 'Sanji', bounty: '330,000,000' }
  ]);

  const [formData, setFormData] = useState({
    id: 0,
    name: '',
    bounty: ''
  });

  return (
    <div className='container'>
      <h2>Add/Update Character</h2>
      <SaveCharacter formData={formData} setFormData={setFormData} setCharacters={setCharacters} characters={characters} />
      <h2>Characters</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Bounty</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            characters.map(character => (
              <Character key={character.id} character={character}  formData={formData} setFormData={setFormData}  />
            ))
          }
        </tbody>
      </table>
    </div>
  );
}


export default App;
