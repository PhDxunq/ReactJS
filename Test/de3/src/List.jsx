import React from "react";

const List = (props) => {
    const arrayList = props.prop;
    return (
        <table border="1">
            <thead>
                <tr>
                    <th>Artist ID</th>
                    <th>Artist Name</th>
                    <th>Genres</th>
                    <th>Number of Tracks</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                {arrayList.map((item) => {
                    return (
                        <tr key={item.title}>
                            <td>{item.id}</td>
                            <td>{item.artistName}</td>
                            <td>{item.genres}</td>
                            <td>{item.numberOfTracks}</td>
                            <td>{item.title}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
export default List;