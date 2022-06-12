import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='mt-4'>
            <h1 className='text-primary'>Our service</h1>
            <div className='container d-flex flex-wrap'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
         </div>
    );
};

export default Services;