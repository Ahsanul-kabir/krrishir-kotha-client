import React, { useEffect, useState } from 'react';
import ServiceItem from '../ServiceItem/ServiceItem';
import { Link } from 'react-router-dom';

const Service = () => {
    const [services, setServices] = useState([])

    useEffect( () => {
        fetch('http://localhost:4000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <section className="container text-center my-5">
            <h2>Provide awesome <span><Link to="/order/:`${name}`" style={{color:'#7AB259'}}>services</Link></span></h2>
            <div className="row mt-5">
                    {
                        services.map(service =><ServiceItem service={service}></ServiceItem>)
                    }
            </div>
        </section>
    );
};

export default Service;