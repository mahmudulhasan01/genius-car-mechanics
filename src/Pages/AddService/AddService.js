import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        axios.post('https://fast-eyrie-21619.herokuapp.com/services',data)
        .then(res=> {
            if(res.data.insertedId){
                alert('Added Successfully')
            
            }

        })
    };

    return (
        <div>
            <h1>Please Add Service</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
             <input placeholder="Name" {...register("Name")} />
             <br /> <br />
             <input placeholder="Price" type="number" {...register("price")} />
             <br /> <br />
             <input placeholder="Description" {...register("description")} />
             <br /> <br />
             <input placeholder="Image Link" {...register("img")} />
             <br /> <br />
             <input type="submit" />
            </form>

        </div>
    );
};

export default AddService;