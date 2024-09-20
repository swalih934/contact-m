import React from 'react'
import { Row,Col } from 'react-bootstrap'
import Contactcard from './Contactcard'
function Contact() {
  return (
<>
<div className=' border border-3 shadow mb-5 p-4 '>
<Row >
    <Col  >
    <Contactcard />
    </Col>
</Row>
<h2 className='text-center text-info'>No Contact Added</h2>
</div>
</>    
  )
}

export default Contact