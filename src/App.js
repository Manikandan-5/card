
// import { Col, Container,Row } from 'react-bootstrap';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function App() {
//   const a=40;
//   const b=50;
//   const c=60;
//   function act(){

//   console.log("hii")
// }

//   return (
//   <>
//   <Container>
//   <h1 className='text-primary text-center'>All Items</h1>
//   <Row className="my-5">
//     <Col md={4}  >

//     <Card >
//       <Card.Img src="https://source.unsplash.com/random/100×100/?Fruit" className='pic-size'/>
//       <Card.Body className='text-center'>
//         <Card.Title>Fruit 1</Card.Title>
//         <Card.Text>
//         <h3>{a}</h3>
//         </Card.Text>
//         <Button variant="info" className='p-2'>Add to Cart</Button>
//       </Card.Body>
//     </Card>
  
//     </Col>
//     <Col md={4} className='my xczḤ-sm-5'>

//     <Card >
//       <Card.Img src="https://source.unsplash.com/random/100×100/?Fruit(8)" className='pic-size'/>
//       <Card.Body className='text-center'>
//         <Card.Title>Fruit 2</Card.Title>
//         <Card.Text>
//         <h3>{b}</h3>
//         </Card.Text>
//         <Button variant="info" className='p-2'>Add to Cart</Button>
//       </Card.Body>
//     </Card>
  
//     </Col>
//     <Col  md={4}>

//     <Card >
//       <Card.Img src="https://source.unsplash.com/random/100×100/?Fruit(2)" className='pic-size'/>
//       <Card.Body className='text-center'>
//         <Card.Title>Fruit 3</Card.Title>
//         <Card.Text>
//         <h3>{c}</h3>
//         </Card.Text>
//         <Button variant="info" className='p-2'onClick={act}  > Add to Cart</Button>
//       </Card.Body>
//     </Card>
  
//     </Col>
//   </Row>

//   </Container>
//   </>
//   );
// }

// export default App;


// ====================Ithu Vanthu Naan Create Pandrathu========================================


import React from 'react'
import { Row } from 'react-bootstrap'

import Itemcard from './Itemcard'
import Data from './Data'
import Cart from './Cart'

import {CartProvider} from 'react-use-cart'

const App = () => {
 
  return (
    <>

    <CartProvider>
      <h1 className='text-center mt-3'>All Items</h1>
      <section className='py-4 container'>
<Row className='justify-content-center'>
  {Data.productionData.map((ans,index)=>{
  return(
     <Itemcard
      img={ans.img} 
      title={ans.title} 
      desc={ans.desc} 
      prize={ans.prize}
       item={ans} 
       key={index}/>
    )
  })}

</Row>
      </section>
      <Cart/>
      </CartProvider>
    </>
  )
}

export default App



