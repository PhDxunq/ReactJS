import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
const Characters = (props) => { 
    const character = props.prop.item;
    const fillData = () => {
        props.prop.setUpdateCharacter(props.prop.item);
    }
    return (
        <>
        <TableContainer>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell sx={{ width: "10%" }}>{character.id}</TableCell>
                        <TableCell sx={{ width: "35%", textAlign: "center" }}>{character.name}</TableCell>
                        <TableCell sx={{ width: "35%", textAlign: "center" }}>{character.bounty}</TableCell>
                        <TableCell sx={{ width: "20%", textAlign: "center" }}><Button onClick={() => fillData()} variant="contained">Update</Button></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
        </>
    )
}
export default Characters;