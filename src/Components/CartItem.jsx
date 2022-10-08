import React from 'react'
import ButtonComp from './Button'


function CartItem({price, qty, productName, id, handleQty}) {
  return (
    <div style={{width:"80%", height:"50px", border:"2px solid black", 
        margin:"auto", display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                <div>{productName}</div>

                <div style={{display:"flex", gap:"10px", alignItems:"center"}}>
                 <ButtonComp id={id} qt={1} changeCount={handleQty} symb="+" />{qty}<ButtonComp id={id} qt={-1} changeCount={handleQty} symb="-" />
                 </div>  

                <div>{price}</div>  
    </div>
  )
}

export default CartItem