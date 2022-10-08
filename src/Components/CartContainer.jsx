import { Heading } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import CartItem from './CartItem'
import "./container.css"

const initData=[
    { 
         id:1,
         product_name:"Noodles",
         price:30,
         qty:1    
     },
     { 
         id:2,
         product_name:"Biriyani",
         price:90,
         qty:2    
     },
     { 
         id:3,
         product_name:"Pizza",
         price:120,
         qty:3    
     }
 ]

 function calculateTotal(products){
    return products.reduce((acc,c)=> acc + (c.qty * c.price),0)
 }
 

function CartContainer() {
    const [data, setData]=useState(initData)
    // console.log(data);

const handleQty=(id, amount)=>{
    console.log(id)

    console.log("amount"+amount)

    let updatedData=data.map(item=>{
        if(item.id===id){
            return {
                ...item,
                qty:item.qty+amount
            }
        }
        else{
            return item
        }
    })
    setData(updatedData)
}

  return (
    <div id='container' style={{width:"60%", height:"400px", margin:"auto",
            padding:"10px",   display:"flex", flexDirection:"column", alignItems:"center"}}>
                <Heading>Cart Page</Heading>
       {
            data.map((item)=>  
                <CartItem key={item.id} productName={item.product_name} 
                        price={item.price} qty={item.qty}
                        id={item.id} handleQty={handleQty} />    
            )
       }
       <div style={{width:"80%",textAlign:"right", paddingRight:"60px"}}>
            <Heading size="md">Total={calculateTotal(data)}</Heading>
       </div>

    </div>
  )
}

export default CartContainer