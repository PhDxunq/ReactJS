import React from "react";

const Characters = ({characters,setUpdateCharacter}) => { 
    const fillData = () => {
        setUpdateCharacter(characters);
    }
    return (
        <>
            <tr>
                <td>{characters.id}</td>
                <td>{characters.name}</td>
                <td>{characters.bounty}</td>
                <td><button class="btn btn-primary"  onClick={() => fillData()} variant="contained">Update</button></td>
            </tr>
        </>
    )
}
export default Characters;