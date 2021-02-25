import React from 'react';

export default function Employee({user}) {
    return (
        <tbody>
            <td> <img width="65" height="65" alt={user.fName} src={user.image}></img></td>
            <td>{user.fName} </td>
            <td>{user.lName}</td>
            <td>{user.phone}</td>
            <td> <a href={user.email}> {user.email}  </a></td>
        </tbody>
    )
}
