import React from "react";
import Card from "../Components/Card";
import Sdata from "../Components/Sdata";

const Services = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="fw-bolder text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row ">
          <div className="col-10 mx-auto">
            <div className="row gy-4 d-flex text-center">
              {Sdata.map((val, index) => {
                return (
                  <div className="col-4">
                    <Card
                      key={index}
                      title={val.title}
                      text={val.text}
                      imgsrc={val.imgsrc}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Services;
