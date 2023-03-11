import React from "react";
import { useState } from "react";


const Contact = () => {
  const [data, setdata] = useState({
    fullname: "",
    mobile: "",
    email: "",
    msg: "",
  });

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thanks ${data.fullname} for visiting our site. A copy of your submissions has been sent to your ${data.email}. Soon You will receive an OTP on your register mobile number ${data.mobile}. Your Msg is ${data.msg}`
    );
  };

  const anEvent = (e) => {
    const { name, value } = e.target;
    setdata((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  return (
    <>
      <div className="my-4 mb-5">
        <h1 className="fw-bolder text-center">Contact</h1>
      </div>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="fullname"
                  value={data.name}
                  onChange={anEvent}
                  id="exampleFormControlInput1"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Mobile Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="mobile"
                  value={data.mobile}
                  onChange={anEvent}
                  id="exampleFormControlInput1"
                  placeholder="Enter Your Mobile Number"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={data.email}
                  onChange={anEvent}
                  id="exampleFormControlInput1"
                  placeholder="Enter your Email"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={anEvent}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
