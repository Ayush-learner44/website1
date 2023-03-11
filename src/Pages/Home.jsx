import React from "react";
import web from "../Images/one.jpg"
import Common from "../Components/Common";

const Home = () => {
  return (
    <>
      <Common
      text="Hello, My name is Ayush Gupta" 
      text2="Happy to see you here"
      func="Get Started"
      dest="/services"
      image={web}
    />
    </>
  );
};

export default Home;
