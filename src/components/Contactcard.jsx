import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Contactcard() {
  return (
<>
{/* <Card className='mb-4 align-items-center' style={{ width: '18rem' }}>
      <Card.Img className='align-items-center m-auto pt-4' style={{width:'50%'}} variant="" src="https://t3.ftcdn.net/jpg/03/02/88/46/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg" />
      <Card.Body>
        <Card.Title>Mohammed Swalih</Card.Title>
        <h6 className='text-center'>9876543210</h6 >
       <div className=''>
          <Button variant="danger">
          <i className="fa-solid fa-trash"  />
          </Button>
       </div>
       <div className='d-grid'>
                  <Button variant="success">
          <i className="fa-solid fa-phone" />
          </Button>
       </div>
      </Card.Body>
    </Card> */}

    <table  className='table table-bordered border shadow border-4 border-dark '>
      <thead>
      <tr>
          <th>Photo        </th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Action</th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td className='text-center'>
            <img  style={{width:'100px'}} src="https://t3.ftcdn.net/jpg/03/02/88/46/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg" alt="" />
          </td>
          <td>Swalih</td>
          <td>Swalih881@gmail.com</td>
          <td>9876543210</td>
          <td>
      <div className='d-flex justify-content-around '>
<div className='btn'>
                <i className="fa-solid fa-phone" style={{color:'green'}} />
  
</div>          
<div className='btn'>
       <i className="fa-solid fa-trash" style={{color:'red'}} />
  
</div>      </div>
     </td>
        </tr>
        
      </tbody>
    </table>
</>
  )
}

export default Contactcard