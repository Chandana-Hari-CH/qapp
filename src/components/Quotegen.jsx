import axios from 'axios';
import React, { useEffect, useState } from 'react';
axios
function Quotegen() {

    const [quote, setQuote]=useState('');
    const [author,setAuthor]=useState('');

    const fetch= async()=>{
        try{
            const response= await axios.get('https://dummyjson.com/quotes')
            const random= response.data.quotes[Math.floor(Math.random()*response.data.quotes.length)]
            setQuote(random.quote)
            setAuthor(random.author)
        }catch(error){
            console.log('error fetching the quote',error);
            
            alert("error")
        }
    }

    useEffect(()=>{
        fetch()
    },[])

  return (
    <>
     <h1 style={{textDecoration:'underline', fontSize:'bolder', color: 'purple' }} className='text-center mt-5 mb-5 fs-bolder'>Quote generator</h1>
   
    <div className="container d-flex align-items-center justify-contents-center mt-0">
    <h3>{quote}</h3>
    <p style={{color:'black'}}>({author})</p>
    
    <button style={{ backgroundColor: 'purple', color: 'white', borderRadius:'20px' }} onClick={fetch} className='btn'> refresh</button>
</div>
    </>
  )
}

export default Quotegen