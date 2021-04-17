import React, { useEffect } from 'react';
import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import OrderedItems from './OrderedItems';

const Service = () => {
    const [orders, setOrders] = useState([])
    console.log(orders)
    useEffect(() => {
        fetch('http://localhost:4000/orders')
        .then(res => res.json())
        .then(result => {
            setOrders(result)
        })
    }, [])
    return (
        <div className="row container-fluid">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <Topbar></Topbar>
                <div style={{width: '100%'}} className="row mt-5">
                    {
                        orders.map(order => <OrderedItems order={order}></OrderedItems>)
                    }
                </div>                
            </div>
        </div>
    );
};

export default Service;