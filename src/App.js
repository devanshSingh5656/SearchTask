import './App.css';
import React,{useEffect, useState} from 'react'
import { Button, Form } from 'react-bootstrap';
import Cards from './Cards';

function App() {
  const [num,setnum]=useState()
  const [mainNum,setmainNum]=useState(9)
  const [mainData,setmainData]=useState([])

  useEffect(()=>{
    fetch(`https://randomuser.me/api?results=${mainNum}`)
    .then(res=>res.json())
    .then(response=>(setmainData(response.results)
   ))
    .catch(err=>console.log('api not working'))
  },[mainNum])
  const handelSubmit=(e)=>{
    e.preventDefault()
    setmainNum(num)

  }

  return (
    <div className='app'>
    <div className="container">
      <div className='row'>
      <Form onSubmit={handelSubmit} className='col-lg-10 col-md-8 col-sm-12 app__input d-flex mx-auto mt-5 '>
      <Form.Control type="number" onChange={(e)=>setnum(e.target.value)} placeholder="Enter number of users..." />
        <Button type='submit'>Submit</Button>
      </Form>
      </div>
      <div className='row mt-5'>
        {mainData.map(res=>(
          <div key={res.cell} className='col-lg-4 col-sm-6 d-flex justify-content-center' >
        <Cards  data={res}/>

          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default App;
