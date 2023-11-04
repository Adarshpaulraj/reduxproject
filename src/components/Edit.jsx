import React from 'react'
import { editUser } from '../Redux/storeSlice'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'  




function Edit() {
  const users= useSelector((state)=>state.user)
  const navigate=useNavigate()
  const {id}=useParams()
 const dispatch=useDispatch()
  const data=users.filter((f)=>f.id==id)
  const {title,paragraph}=data[0]
  const [ntitle,setTitle]=useState(title)
  const [nparagraph,setParagraph]=useState(paragraph)


const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(editUser({
        id:id,
        title:ntitle,
        paragraph:nparagraph
    }))
    navigate('/')
 }



  return (
    <div className="container-fluid">
    <div className="shadow-lg  bg-body  shadow box">
        <div className="title">
          <h3>Update The Notes</h3>
          <input type="text" placeholder="Title" value={ntitle} onChange={(e)=>setTitle(e.target.value)} />
        </div>
        <textarea
          name="Text"
          id="textnotes"
          cols="105"
          rows="4"
          placeholder="Take a Notes. . . "  value={nparagraph} onChange={(e)=>setParagraph(e.target.value)}
        />
          <Button variant='outline-dark m-1 mb-3 '  size="sm" onClick={handleSubmit}>submit</Button>
      </div>
      </div>
  )
}

export default Edit