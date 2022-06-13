import React from 'react';
import img from './img/img.png';

const Booking = () => {
    return (
        <div style={{width:'800px', backgroundColor:'#fcfaed'}} className='mx-auto'>
            <h1 className='text-center mt-4'>Thank you for the booking</h1>
            <img className='ms-4' src={img} alt="" />
        </div>
    );
};

export default Booking;