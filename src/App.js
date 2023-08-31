import React, { useState, useEffect } from 'react';
import './App.css';

const API_URL = 'https://dummyjson.com/quotes';

function FetchApi() {
  const [item,setItems] = useState([]);
const ApiGet=async()=>{
    const response=await fetch(API_URL)
    .then((res)=>res.json())   
    .then((dat)=>dat.quotes)
    const responsedata=response.filter((item)=>item.id<=15)
    setItems(responsedata)
} 
 useEffect(()=>{
    ApiGet();
 },[]);
 return(
    <>
        {item.map((object)=>(
        <div style={{backgroundColor: 'yellow',color:'black'}}>
        <h2>{object.id}-{object.quote}</h2>
        </div>
        ))}
        
    </>
 )
 

}

export default FetchApi