import React, { useEffect, useState } from 'react';

const DeleteService = () => {
    const [service, setService] = useState([])

    useEffect( () => {
        fetch('http://localhost:4000/services')
        .then(res => res.json())
        .then(data => console.log('service',data))
    }, [])

    // console.log('service',data)

    const deleteEvent = id => {
        // console.log(id)
        fetch(`http://localhost:4000/deleteService/${id}`,{

            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => alert('Deleted Successfully'))
    }
    return (
        <div style={{ border: '1px solid gray', width: '90%',margin:"10px",padding:"5px" }}>
            <h3 style={{color:"orange"}}>Produce Name: {service.title}</h3>

            <button class="btn btn-danger" onClick={() => deleteEvent(service._id)}>Delete</button>
        </div>
    );
};

export default DeleteService;