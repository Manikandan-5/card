
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



