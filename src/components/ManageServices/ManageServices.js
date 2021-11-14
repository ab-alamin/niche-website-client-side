import React,{useEffect, useState} from 'react';
const ManageServices =() => {
    const [services, setServices] = useState([])
    useEffect( () => {
        fetch('https://infinite-wildwood-81897.herokuapp.com/services')
        .then(res=>res.json())
        .then(data => setServices(data))
    },[]);
    const handleDelete = id => {
        const url =`https://infinite-wildwood-81897.herokuapp.com/services/${id}`;
        fetch (url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                alert('Deleting? ok')
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining);
            }
           
        })
    }
    return(
        <div>
        <h2>Manage Services</h2>
        {
            services.map(service => <div key={service._id}>
                <h3>{service.name}</h3>
                <button onClick={()=> handleDelete(service._id)}>Delete</button>
            </div>)
        }
    </div>
    );
};

export default ManageServices;
   