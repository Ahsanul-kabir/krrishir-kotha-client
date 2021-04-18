import React, { useEffect, useLayoutEffect, useState } from 'react';
import DeleteItem from './DeleteItem';

const DeleteService = () => {
    const [services, setService] = useState([])

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:4000/services')
            const data = await response.json()
            setService(data)
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            {
                services.map(item => <DeleteItem key={item._id} item={item}></DeleteItem>)
            }
        </div>
    );
};

export default DeleteService;