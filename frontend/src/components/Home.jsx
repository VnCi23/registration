// import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style= {{backgroundColor : "white"}} className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
        <h1>Login Success</h1>
        <p>Wait until the project is finished</p>
        <Link to='/login' className="btn btn-light my-5">Logout</Link>
    </div>
  )
}

export default Home