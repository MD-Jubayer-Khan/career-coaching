import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = (props) => {
    const {name, img, text, price} = props.service;
    const navigate = useNavigate()

    const handleCheckoutBtn = () =>{
            navigate('/checkout')
    }
    return (
        <div>
          <Card className='img-fluid mx-4 mt-4' style={{ width: '20rem' }}>
                 <Card.Img className='img-fluid'  variant="top" src={img} />
                 <Card.Body>
                   <Card.Title>{name}</Card.Title>
                   <Card.Text>
                   {text}
                   </Card.Text>
                   <Card.Text>
                   {price}
                   </Card.Text>
                   <Button onClick={handleCheckoutBtn} variant="primary">Check out now</Button>
                 </Card.Body>
            </Card>
        </div>
    );
};

export default Service;