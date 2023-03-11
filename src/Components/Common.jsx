import React from 'react'
import { NavLink } from 'react-router-dom'

const Common = (props) => {
  return (
    <>
    <div className="container-fluid  ">
      <div className="row">
        <div className="col-10 mx-auto text-center ">
          <div className="row">
            <div className="col-md-6  col-10">
              <div className="row ">
                <div className="col-12 pt-4 ">
                  <h1 className="fw-bolder">
                    {props.text}
                  </h1>
                </div>
                <div className="col-12 pt-4">
                  <h3 className="fw-bolder">{props.text2}</h3>
                </div>
                <div className="col-12 pt-4">
                  <NavLink
                  to={props.dest}
                    type="button"
                    className="btn btn-outline-info  fw-bolder fs-6"                  
                  >
                    {props.func}
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6  col-10 mt-4">               

              <img
                className="img-fluid  rounded mx-auto d-block"
                 src={props.image}
                alt="Oops 😢"
              />
          
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Common