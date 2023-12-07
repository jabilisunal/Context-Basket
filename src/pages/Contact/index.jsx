import React from 'react'
import { useParams } from 'react-router-dom'

function ContactPage() {
  let { mehhemd } = useParams();
  return (
    <>
    <h3>id :{mehhemd} </h3>
    <h1>Detail header</h1>
   
    </>
  )
}

export default ContactPage