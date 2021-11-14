import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router';

const Information = () => {
    const {serviceId} = useParams();

    const[service, setService]= useState({});
    useEffect( ()=>{
        fetch(`https://infinite-wildwood-81897.herokuapp.com/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data));
        
    },[]);
    return (
        <div>
            <h2>details of: {service.name}</h2>
           <h2>Our Products details: {serviceId}</h2>
           <button type="submit">Order</button>
           <br />
           <img src="https://image.freepik.com/free-vector/uae-online-travel-agency-website-concept-banner-with-flag-mosque-science-fiction-style-architecture-flat-illustration_1284-28658.jpg" alt="" />
        </div>
    );
};

export default Information;