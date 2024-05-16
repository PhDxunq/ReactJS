import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SaveCharacter = ({ formData, setFormData, setCharacters, characters }) => {

    const updateStateFormData = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }
    
    const handleSubmitCharacter = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        if(formData.id === 0) {
            const id = characters.length + 1;
            const name = data.get('name');
            const bounty = data.get('bounty');
            setCharacters([...characters, { id: id, name: name, bounty: bounty }]);
            setFormData({
                id: 0,
                name: '',
                bounty: ''
            });
        }else{
            const id = formData.id;
            const name = data.get('name');
            const bounty = data.get('bounty');
            const newCharacters = characters.map(character => {
                if(character.id === id) {
                    character.name = name;
                    character.bounty = bounty;
                }
                return character;
            });
            setCharacters(newCharacters);
            setFormData({
                id: 0,
                name: '',
                bounty: ''
            });
        }
    } 


    return (
        <div className="save-character">
            <Form onSubmit={(event) => handleSubmitCharacter(event)} className='mb-3' method="post">
                <InputGroup className="mb-3">
                    <FormControl onChange={(event) => updateStateFormData(event)}
                        placeholder="Character's name"
                        aria-label="Character's name"
                        aria-describedby="basic-addon2"
                        value={formData.id || 0}
                        readOnly
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <FormControl onChange={(event) => updateStateFormData(event)}
                        name="name"
                        placeholder="Character's name"
                        aria-label="Character's name"
                        aria-describedby="basic-addon2"
                        value={formData.name || ''}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <FormControl onChange={(event) => updateStateFormData(event)}
                        name="bounty"
                        placeholder="Bounty"
                        aria-label="Bounty"
                        aria-describedby="basic-addon2"
                        value={formData.bounty || ''}
                    />
                </InputGroup>
                <Button type="submit" variant="primary">SAVE</Button>
            </Form>
        </div>
    )
}

export default SaveCharacter;