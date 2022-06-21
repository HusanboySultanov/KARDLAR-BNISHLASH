import React, {useState, useContext} from 'react'
import {FozilInfo}from '../context'
import {Container, Cards, Img, Title, Button} from './style'

export const Card = () => {
 const [mock, setMock] = useContext(FozilInfo)
 console.log(mock);

  const getDelite = (ids) =>{
   const newData = mock.filter((value)=> value.id !== ids)

   setMock(newData)
  }
  return (
  <Container>
     { 
      mock.map((value)=>{
        return(
           <Cards>
             <Img src={value.url}/>
             <Title>{value.name}</Title>
             <Button onClick={()=>getDelite(value.id)}>Delite</Button>
           </Cards>
        )
      })
     }
  </Container>
  )
}
export default Card;

