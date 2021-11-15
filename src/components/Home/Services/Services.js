import React,{useState,useEffect} from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const[services, setServices] = useState([])
    useEffect(()=> {
        fetch('https://infinite-wildwood-81897.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data.slice(0,6)))
        
    },[])
    
    return (
        <div id="services">
            
            <h2 className="text-primary mt-5">Our Products</h2>
            <div className="service-container">
            {
                services.map(service => <Service
                 key={service.id}
                 service={service}
                ></Service>)
            }
            
        </div>
        </div>
    );
};

export default Services;
