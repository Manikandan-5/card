import React from 'react'
import { Col } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import {useCart} from 'react-use-cart';

const Itemcard = (props) => {

    const {addItem}=useCart();

  return (

    <>
     
        <Col lg={4} md={6} className='mx=0 mb-4' >
            <Card style={{ width: '18rem' }} className='p-0 overflow-hidden h-100 shadow text-center'>
      <Card.Img variant="top" src={props.img} fluid/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
           $ {props.prize}
        {props.desc}
        </Card.Text>
        <Button variant="success" 
        onClick={()=>addItem(props.item)}
        >Add to Cardd</Button>
      </Card.Body>
    </Card>
    </Col>
   
        </>
  )
}

export default Itemcard