import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const SaveCharacter = (props) => {
    const { characters, setCharacters, updateCharacter,  setUpdateCharacter } = props;


    const toSaveCharacter = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const bounty = event.target.bounty.value;
        if (updateCharacter.id === 0) {
           const id = characters.length + 1;
            const characterObject = {
                id: id,
                name: name,
                bounty: bounty
            };
            setCharacters([...characters, characterObject]);
            alert("Thêm thành công");
        } else {
            const id  = updateCharacter.id;
            const newCharacters = characters.map((item) =>
                {
                    if (item.id === id) {
                        return {...item, name: name, bounty: bounty };
                    }
                    return item;
                }
            );
            setCharacters(newCharacters);
            alert("Cập nhật thành công");
        }
        setUpdateCharacter({
            id: 0,
            name: "",
            bounty: ""
        });
        document.getElementById("form").reset();
    };

    return (
        <div>
            <form onSubmit={toSaveCharacter} id="form">
                <div >
                    <label>ID</label>
                    <br />
                    <input  className="w-75 " type="number" placeholder="0" name="id" value={updateCharacter?.id || 0} readOnly />
                </div>
                <div>
                    <label>Name</label>
                    <br />
                    <input className="w-75" type="text" placeholder="Enter character name" name="name" defaultValue={updateCharacter?.name || ''} required />
                </div>
                <div>
                    <label>Bounty</label>
                    <br />
                    <input className="w-75" type="text" placeholder="Enter character bounty" name="bounty" defaultValue={updateCharacter?.bounty || ''} />
                </div>
                <br />
                <div>
                    <button className="btn btn-primary" type="submit">SAVE</button>
                </div>
            </form>
            
        </div>
    );
};

export default SaveCharacter;
