 import Sidebar from "./components/Sidebar"
 import Notes from "./components/Notes"
 import { BrowserRouter,Routes,Route } from "react-router-dom";
 import Edit from "./components/Edit";
   function App() {
 
  return <>
    <div id="wrapper" >
    <BrowserRouter>
    <Sidebar/> 
    <Routes>
       <Route path="/" element={ <Notes/> }/>
       <Route path="/Edit/:id" element={<Edit/>} />
     </Routes>
    </BrowserRouter>
      </div>
     
  </> 
  
  
    
  
}

export default App
