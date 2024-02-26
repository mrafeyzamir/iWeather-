import React from 'react'
import { Link } from 'react-router-dom';

export default function notFound() {
  return (
    <div>
     <div className="card text-center mt-5 mb-3" style={{ width: '50%', margin: 'auto', marginTop: '50px' }}>
  <div className="card-header">
    
  </div>
  <div className="card-body">
    <h5 className="card-title"><b>404 -NOT FOUND</b></h5>
    <p className="card-text">This page is not found. do you want to go somewhere else?</p>
    <Link to="/" className="btn btn-primary">Go Home</Link>
  </div>
  <div className="card-footer text-muted" >
   
  </div>
</div>

    </div>
  )
}
