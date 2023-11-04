import React from "react";
 import { BsTrash3 } from "react-icons/bs";
import { MdOutlineEdit } from "react-icons/md";
 import { useState } from 'react';
import { BsFileEarmarkText } from "react-icons/bs";
import Button from 'react-bootstrap/Button'  
import { useDispatch ,useSelector} from "react-redux";
import { createUser,deleteUser } from "../Redux/storeSlice";
import { useNavigate } from "react-router-dom";


  function Notes() {
  const users=useSelector((state)=>state.user)
  console.log(users)
  const dispatch=useDispatch()
 const navigate=useNavigate()
  let [title,setTitle]=useState("")
  let [paragraph,setParagraph]=useState("")
  let handleSubmit=(e)=>{
    e.preventDefault()
     dispatch(createUser({ id:users[users.length-1].id+1, title,paragraph}))

  }

  const handleDelete=(id)=>{
    dispatch(deleteUser({id:id}))
  }
  
  return (                  
    <>
      <div className="container-fluid">
      <div className="shadow-lg  bg-body  shadow box">
          <div className="title">
            <h3>Add a Notes</h3>
            <input type="text" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)} />
          </div>
          <textarea
            name="Text"
            id="textnotes"
            cols="105"
            rows="4"
            placeholder="Take a Notes. . . "  value={paragraph} onChange={(e)=>setParagraph(e.target.value)}
          />
            <Button variant='outline-dark m-1 mb-3 '  size="sm" onClick={handleSubmit}>submit</Button>
        </div>
        <div>
          <h3 className="fs-4 p-2 mb-0 mt-2">
            <BsFileEarmarkText size={25} />
            &nbsp; My Notes
          </h3>
          <h6 className="ms-3 mt-0 ">Recently Viewed</h6>
         </div>
         <div className="  overflow">
        {
          users.map((e,i)=>{
             return   <div className="shadow-lg  bg-body shadow box2 m-2 p-2" key={i}>
          
            <div className="trash pt-2">
              <h4 className="fs-5">{e.title} </h4>
              <span>
                <MdOutlineEdit onClick={()=>navigate(`/Edit/${e.id}`)}/>
                &nbsp;
                <BsTrash3 size={15} onClick={()=>handleDelete(e.id)}/>
              </span>
            </div>
            <div>
              <p>
                {e.paragraph}
               </p>
            </div>
          </div>
          })
        }
        
        </div>
      </div>
    </>
  );
}

export default Notes;
