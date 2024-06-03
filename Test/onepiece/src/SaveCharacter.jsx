import React from "react";
const SaveCharacter = (props) => {
    const characters = props.prop;
    const updateCharacter = props.prop.updateCharacter;
    const toSaveCharacter = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const bounty = event.target.bounty.value;
        let id = event.target.id.value;
        if(id === "0"){
            id = characters.characters.length + 1;
            const characterObject = {
                id: id,
                name: name,
                bounty: bounty
            }
            characters.setCharacters([...characters.characters,characterObject]);
        }
        else{
            for(const index in characters.characters){
                const item = characters.characters[index];
                if(item["id"].toString() === id.toString()){
                    characters.characters[index] = {
                        id: id,
                        name: name,
                        bounty: bounty
                    }
                }
            }
            console.log(characters.characters);
        }
        props.prop.setUpdateCharacter({
            id: 0,
            name: "",
            bounty: ""
        });
        document.getElementById("form").reset();
    }
    return (
        <>
            <h2>Add/Edit Character</h2>
            <form onSubmit={(event) => toSaveCharacter(event)} id="form">
                <label>ID</label>
                <br />
                <input type="number" placeholder="0" name="id"  value={updateCharacter.id}/>
                <br />
                <label>Name</label>
                <br />
                <input type="text" placeholder="Enter character name" name="name" defaultValue={updateCharacter.name} required/>
                <br />
                <label>Bounty</label>
                <br />
                <input type="text" placeholder="Enter character bounty" name="bounty" defaultValue={updateCharacter.bounty}/>
                <br />
                <input type="submit" value="SAVE" />
            </form></>
    )
}
export default SaveCharacter;