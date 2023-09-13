import React, { useEffect, useState } from 'react'
import axios from 'axios'
const UserList = () => {
  const [data,setData]= useState([])

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
      setData(response.data)
      console.log(response)
    })
  },[])
  return (
    <div  style={{marginTop: "50px", boxSizing:"border-box", borderBlockStyle:"double", backgroundImage: "linear-gradient(white,blue)", padding:"30px",fontsize: "20px", color:"black", textAlign:"center"}}>
     {data.map((e)=>(<div>name is : {e.name}</div>))} 
    </div>
  )
}

export default UserList