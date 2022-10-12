import React from "react";
import "../CssControls/about.css"
import MyPhoto from "../components/Media/Images/adam_faylo.png"

const About = () => {
  return (
    <div className="abuot_conatainer">
    <div className="about_controle">
      {/* main right */}
      <div className="main_right">
        <h1 className="text_right"><span>About</span>Me <hr className="text_decoration"></hr></h1>
        <div className="container_right">
          {/* box1 */}
          <div className="text_resume">
            <p>Name: <span>Adam Faylo</span></p>
            <p>Age: <span>36</span></p>
            <p>Post: <span>Beginner</span></p>
            <p>Language: <span>Hebrew/Russian/English</span></p>
            <button className="btn btn-light">Download cv</button>
          </div>
          {/* box2 */}
          <div className="experience">
            <div><h1>0</h1><p>Year Of Experience</p></div>
            <div><h1>1</h1><p>Project Complete</p></div>
            <div><h1>0</h1><p>Client</p></div>
            <div><h1>0</h1><p>Awrad</p></div>
          </div>
        </div>
      </div>

      {/* main left */}
      <div className="main_left">
        <img className="my_photo" src={MyPhoto} alt="My img" />
        <h1>Adam faylo</h1>
        <p>Beginner Developer</p>
      </div>
    </div>
      
     {/* INFO OF MY PROJECT */}
      <div className="info_project">
         <h1>What is the technique I used?</h1>
        <div>box1</div>
        <div>box2</div>
        <div>box3</div>
        <div>box4</div>
      </div>
    </div>
  );
};

export default About;
