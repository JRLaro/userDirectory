import React from 'react'

export default function TableHeader() {
    const opacity = {
    // backgroundColor: "#00ccbb"
        opacity: 0.5
}
    const font = {
        fontSize: 20,
        // opacity: 0.9
}
    
    return (
    <thead className="thead text-light border border-3">
        <tr>
                <th scope="col" className="border-end border-dark border-3 text-center bg-danger" style={font}> Image </th>
        <th scope="col" className="border-end border-dark border-3 text-center bg-primary" style ={font}>Last Name</th>
        <th scope="col" className="border-end border-dark border-3 text-center bg-warning" style ={font}>First Name</th>
        <th scope="col" className="border-end border-dark border-3 text-center bg-success" style ={font}>Phone #</th>
        <th scope="col" className="border-end border-dark border-3 text-center bg-info" style ={font}>Email</th>
        </tr>
    </thead>
    )
}

