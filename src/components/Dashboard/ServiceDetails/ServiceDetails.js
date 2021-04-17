import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import './ServiceDetails.css'


const ServiceDetails = () => {
    const [details, setDetails] = useState([])
    console.log(details)
    useEffect(() => {
        fetch('https://cryptic-island-29877.herokuapp.com/orders')
        .then(res => res.json())
        .then(result => {
            setDetails(result)
        })
    }, [])
    return (
        <div className="row container-fluid">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <Topbar></Topbar>
                <div style={{width: '100%'}} className="row mt-5 table-content">
                <table className="table table-borderless">
                    <thead className="table-head">
                        <tr>
                        <th className="text-secondary" scope="col">Name</th>
                        <th className="text-secondary" scope="col">Email ID</th>
                        <th className="text-secondary" scope="col">Service</th>
                        <th className="text-secondary w-25" scope="col">Project Details</th>
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