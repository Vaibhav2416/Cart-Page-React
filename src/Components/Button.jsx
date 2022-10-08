import React from 'react'
import {Button } from "@chakra-ui/react"
function ButtonComp({symb, id, qt, changeCount}) {
  return (
    <div>
        <Button onClick={()=>changeCount(id,qt)}>{symb}</Button>
    </div>
  )
}

export default ButtonComp