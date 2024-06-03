import React from "react";

const Characters = (props) => { 
    const character = props.prop.item;
    const fillData = () => {
        props.prop.setUpdateCharacter(props.prop.item);
    }
    return (
        <>
        
            <table>
                <tbody>
                    <tr>
                        <td sx={{ width: "10%" }}>{character.id}</td>
                        <td sx={{ width: "35%", textAlign: "center" }}>{character.name}</td>
                        <td sx={{ width: "35%", textAlign: "center" }}>{character.bounty}</td>
                        <td sx={{ width: "20%", textAlign: "center" }}><button onClick={() => fillData()} variant="contained">Update</button></td>
                    </tr>
                </tbody>
            </table>
    
        </>
    )
}
export default Characters;