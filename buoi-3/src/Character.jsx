import React, {useState} from "react";
import Button from "react-bootstrap/Button";

const Character = ({character, formData, setFormData}) => {
    
    const handleUpdateForm = (event) => {
        setFormData({
            id: character.id,
            name: character.name,
            bounty: character.bounty
        });
    }

    return (
        <tr>
            <td>{character.id}</td>
            <td>{character.name}</td>
            <td>{character.bounty}</td>
            <td><Button onClick={(event) => handleUpdateForm(event)} variant="primary">Update</Button></td>
        </tr>
    )
}


export default Character;