import { Link } from "react-router-dom"


const Navbar=()=>{


    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <p className="navbar-brand">MERN APP</p>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      
      <li className="nav-item active">
        <Link to='/' className="nav-link" >Create Post</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to='/all'>All Post </Link>
      </li>
    </ul>
  </div>
</nav>
    )

}

export default Navbar