import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const Update=()=>{


    const navigate=useNavigate()

    const [data,setData]=useState({
        name:"",
        email:'',
        age:0
    })

    const {id}=useParams()


    const handleEdit=async(e)=>{

        e.preventDefault()

        const update=await axios.patch(`http://localhost:4000/api/user/updateUser/${id}`,data)

        if(update.status===200){
            alert(update.data.message)

            navigate('/all')
        }else{
            alert('Error',update.data.error)
        }


    }


    const handleChange=(e)=>{

        
        let name=e.target.name
        let value=e.target.value

        setData({
            ...data,
            [name]:value
        })

    }

    const getData=async()=>{

        

        console.log(id)


        const res=await axios.get(`http://localhost:4000/api/user/getuser/${id}`)
          const resdata=res.data.data
        if(res.status){
             setData({
                ...data,
                name:resdata.name,
                email:resdata.email,
                age:resdata.age
             })

        }
    }

    useEffect(()=>{
       getData()
    },[getData])

    return(
        <div className="container my-2">
        <h2 className="text-center">Edit the Data</h2>
        <form onSubmit={handleEdit} >

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

export default Update