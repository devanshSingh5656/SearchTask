import React from "react";
import { Card,Button  } from "react-bootstrap";

function Cards({data}) {
  return (
    <div className=''>
      <Card className='app__cards my-3' style={{ width: "18rem" }}>
        <Card.Img variant="top" src={data.picture?.large} />
        <Card.Body>
          <Card.Title>{data.name?.title} {data.name?.first} {data.name?.last}</Card.Title>
          <p>UserName: {data.login?.username}</p>
          
          <p className=''>Gender: {data?.gender}</p>
          <p>Phone Number: {data?.cell}</p>
          <p>Age: {data.dob?.age}</p>
          <p>location: {data.location?.street?.number},{data.location?.street?.name},{data.location?.city}</p>

  
          <Button variant="primary">Go somewhere</Button>
          <small ><p className='pt-2'>Registered {data.registered.age}yrs ago</p></small>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
