import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    const {name, img, description, price} = service;

    useEffect(()=>{
        fetch(`https://fast-eyrie-21619.herokuapp.com/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))
    },[]);

    return (
        <div>
            <h2>this is booking: {name}</h2>
            <br />
            <img src={img} alt="" />
            <p>{description}</p>
            <h6>Price: {price}</h6>
        </div>
    );
};

export default Booking;