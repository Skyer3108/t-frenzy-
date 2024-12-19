import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"



const Create=()=>{


    const [data,setData]=useState({
        name:"",
        email:'',
        age:0
    })
const navigate=useNavigate()

    const handleChange=(e)=>{

    const name=e.target.name
    const value=e.target.value

setData({...data,[name]:value})


    }

    const handleSubmit=async(e)=>{

        e.preventDefault()

     const res=await axios.post('http://localhost:4000/api/user/user',data)

     if(res.status===200){
        alert('Data Added Sucessfully')
        navigate('/all')
      
     }else{
        alert(res.error)
     }

     setData({
        name:"",
        email:'',
        age:0
    })


    }

   
    return(
        <div className="container my-2">
            <h2 className="text-center">Enter Data</h2>
            <form onSubmit={handleSubmit} >

            <div className="form-group">
    <label for="exampleInputPassword1">Name</label>
    <input type="text" name='name' value={data.name} onChange={handleChange}  className="form-control" id="exampleInputPassword1" placeholder="Name"/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" name='email' value={data.email}  onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
   
  </div>
 

  <div className="form-group">
    <label for="exampleInputPassword1">Age</label>
    <input type="number" name='age'  value={data.age} onChange={handleChange}  className="form-control" id="exampleInputPassword1" placeholder="Age"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
           
        </div>
    )

}
export default Create