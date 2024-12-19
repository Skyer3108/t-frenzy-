import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const All = () => {

    const [data,setData]=useState('')

    const getData=async()=>{
        const res=await axios.get('http://localhost:4000/api/user/getusers')
  console.log(res.data.data)

  setData(res.data.data)
        }

    useEffect(()=>{

        getData()
    },[])

    const handleDel=async(id)=>{

        const del=await axios.delete(`http://localhost:4000/api/user/delete/user/${id}`)
   console.log(del)
        if(del.status===200){

            alert(del.data.message)

            setTimeout(()=>{

                getData()

            },1000)

        }else{
            alert(del.message)
        }

    }
    return (
        <div className="container my-2">

            <h2 className="text-center">Show All Data</h2>

            <div className="row">


                {
                    data?data.map((data)=>(

                        <div key={data._id} className="col-3">
                        <div className="card" >
                            <div className="card-body">
                                <h5 className="card-title">Name : {data.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Email : {data.email}</h6>
                                <p  className="text-muted">Age :{data.age}</p>
                                <button href="#" className="btn btn-danger me-2" onClick={()=>handleDel(data._id)}>Delete</button>
                                <Link to={`/${data._id}`} className="btn btn-warning"  >Edit</Link>
                            </div>
                        </div>
                    </div>

                    )):<p>There is No Users Data</p>
                }

              

            </div>


        </div>
    )

}

export default All