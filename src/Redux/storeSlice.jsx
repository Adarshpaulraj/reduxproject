import { createSlice } from "@reduxjs/toolkit";

const userdata=[
     
    { id:1,
      title:"Wekly Task",
      paragraph:` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
      dolorum excepturi corrupti culpa a, blanditiis nihil corporis
      magni eaque, provident beatae reprehenderit, Doloremque, dignissimos iure.`
    },
    { id:2,
      title:"Wekly Task",
      paragraph:` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
      dolorum excepturi corrupti culpa a, blanditiis nihil corporis
      magni eaque, provident beatae reprehenderit, Doloremque, dignissimos iure.`
    }, 
    {
      id:3,
      title:"Wekly Task",
      paragraph:` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
      dolorum excepturi corrupti culpa a, blanditiis nihil corporis
      magni eaque, provident beatae reprehenderit, Doloremque, dignissimos iure.`
    }, ]

    const userSlice=createSlice({
        name:"user",
        initialState:userdata,
        reducers:{
            createUser:(state,action)=>{
                state.push(action.payload)
            },
            editUser:(state,action)=>{
              const {id,title,paragraph}=action.payload
              const data1=state.find(f=>f.id==id)
              if(data1){
                data1.title=title,
                data1.paragraph=paragraph
              }
            },
            deleteUser:(state,action)=>{
              const {id}=action.payload
              const data=state.find((f)=>f.id==id)
              if(data){
                return state.filter((f)=>f.id !==id)
              }
            }
        }
    })
    export const {createUser,deleteUser,editUser}=userSlice.actions
    export default userSlice.reducer