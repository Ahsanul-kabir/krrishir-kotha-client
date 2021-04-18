import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import './ServiceDetails.css'
import { UserContext } from '../../../App';

const ServiceDetails = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [details, setDetails] = useState([])
    console.log(details)
    useEffect(() => {
        fetch('http://localhost:4000/ordersSpecific', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(loggedInUser),
        })
            .then(res => res.json())
            .then(result => {
                setDetails(result)
            })
    }, [])




    // console.log(loggedInUser.email)
    return (
        <div className="row container-fluid">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <Topbar></Topbar>
                <div style={{ width: '100%' }} className="row mt-5 table-content">
                <h5>Service Details</h5>
                    <table className="table table-borderless">
                        <thead className="table-head">
                            <tr>
                                <th className="text-secondary" scope="col">Name</th>
                                <th className="text-secondary" scope="col">Email ID</th>
                                <th className="text-secondary" scope="col">Service</th>
                                <th className="text-secondary w-25" scope="col">Orders Details</th>
                                <th className="text-secondary" scope="col">Payment via</th>
                                <th className="text-secondary" scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                details.map((details) =>
                                    <tr>
                                        <td>{details.name}</td>
                                        <td>{details.email}</td>
                                        <td>{details.service}</td>
                                        <td className="text-justify">{details.description}</td>
                                        <td className="text-justify">Stripe</td>
                                        <td className="text-danger">Pending</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;