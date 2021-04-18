import React from 'react';

const DeleteItem = ({item}) => {
    const deleteEvent = id => {
        console.log(id)
        fetch(`https://cryptic-island-29877.herokuapp.com/deleteService/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => alert('Deleted Successfully'))
    }
    return (
        <div style={{ border: '1px solid gray', width: '90%',margin:"10px",padding:"5px" }}>
        <h3 style={{color:"orange"}}>Produce Name: {item.title}</h3>
        <h3 style={{color:"orange"}}>Description: {item.description}</h3>

        <button class="btn btn-danger" onClick={() => deleteEvent(item._id)}>Delete</button>
    </div>
    );
};

export default DeleteItem;