import React from 'react'

export default function TableHeader() {
    return (
    <thead className="thead text-white bg-primary">
        <tr>
        <th scope="col"> Image </th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Phone #</th>
        <th scope="col">Email</th>
        </tr>
    </thead>
    )
}

