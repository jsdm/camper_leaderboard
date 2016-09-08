import React from 'react';

const ListItem = (props) => {
    console.log(props.name);
    return (
        <tr key={key}>
            <td>{props.rank}</td>
            <td><a href={"http://www.freecodecamp.com/" + props.name} target="_blank"><img src={props.image} /> {props.name}</a></td>
            <td>{props.recentPoints}</td>
            <td>{props.allPoints}</td>
        </tr>
    );
};