import React from "react";
import "../../src/components/CssControls/about.css";
import { HiOutlinePencilAlt } from "react-icons/hi";
import MyPhoto from "../components/Media/Images/AdamFaylo.png"
import ImgExperience from "../components/Media/Images/mike.jpg"
import logoCSS from "../components/Media/Images/icons8-css3.png"
import logoJs from "../components/Media/Images/icons8-javascript.png"
 import logoReact from "../components/Media/Images/icons8-react-native-480.png"

const About = () => {
  return (
    <div className="about_container">
      <div className="spacer"></div>
      {/* 1 */}
      <div className="about_top">
        <div className="text_top">
          <div>
            <h1>LET'S BEGIN</h1>
            <p>Welcome my websaid</p>
            <button className="btn_text_top">Click Here</button>
          </div>
        </div>
        <div></div>
      </div>
      {/* 2 */}
      <div className="info_experience">
        <div>
          <HiOutlinePencilAlt className="icon_pen"/>
          <p>GRAPHIC DESIGN<span></span></p>
        </div>
        <div>
          <HiOutlinePencilAlt className="icon_pen"/>
          <p>GRAPHIC DESIGN<span></span></p>
        </div>
        <div>
          <HiOutlinePencilAlt className="icon_pen"/>
          <p>GRAPHIC DESIGN<span></span></p>
        </div>
      </div>
      {/* 3 */}
      <div className="info_adam">
        <p>ABOUT ME</p>
        
        <div className="style_info">
          <div></div>
          <div></div>
        </div>
        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>

        <div className="box_info_adam">
          <div><img src={MyPhoto} alt="my photo" /></div>
          <div className="text_info">
            <h1>Hello, i am <span>Adam Faylo</span></h1>
            <p>Age: <span>36</span></p>
            <p>Post: <span>Beginner</span></p>
            <p>Language: <span>Hebrew/Russian/English</span></p>
          
            </div>
        </div>
      </div>
      {/* 4 */}
      <div className="about_botton_container">
        <div className="img_experience">
          <div className="about_botton">
           <div><h1>0</h1><p>Year Of Experience</p></div>
           <div><h1>2</h1><p>Project Complete</p></div>
           <div><h1>0</h1><p>Client</p></div>
           <div><h1>0</h1><p>Awrad</p></div>
        </div>
      </div>
        </div>
       
      {/* 5 */}
      <div className="service">
      <div className="style_info_ex">
          <h6>coco</h6>
          <p>Lorem ipsum dolor sit amet consectetu </p>
        </div>
      </div>
      <div className="web_service">
        <div><img className="program_style" src={logoCSS} alt="css" /><p>CSS</p></div>
        <div><img className="program_style" src={logoJs} alt="css" /><p>JS</p></div>
        <div><img className="program_style" src={logoReact} alt="css" /><p>REACT</p></div>
      </div>
    </div>
  );
};

export default About;
{
  /* <div className="abuot_conatainer">
<div className="about_controle"> */
}
{
  /* main right */
}
{
  /* <div className="main_right">
    <h1 className="text_right"><span>About</span>Me <hr className="text_decoration"></hr></h1>
    <div className="container_right"> */
}
{
  /* box1 */
}
{
  /* <div className="text_resume">
        <p>Name: <span>Adam Faylo</span></p>
        <p>Age: <span>36</span></p>
        <p>Post: <span>Beginner</span></p>
        <p>Language: <span>Hebrew/Russian/English</span></p>
        <button className="btn btn-light">Download cv</button>
      </div> */
}
{
  /* box2 */
}
{
  /* <div className="experience">
        <div><h1>0</h1><p>Year Of Experience</p></div>
        <div><h1>1</h1><p>Project Complete</p></div>
        <div><h1>0</h1><p>Client</p></div>
        <div><h1>0</h1><p>Awrad</p></div>
      </div>
    </div>
  </div>col1 */
}

{
  /* main left */
}
{
  /* <div className="main_left">
    <img className="my_photo" src={MyPhoto} alt="My img" />
    <h1>Adam faylo</h1>
    <p>Junior Full Stack Developer</p>
  </div>
</div> */
}

{
  /* INFO OF MY PROJECT */
}
{
  /* <div className="about_techn">
     <h1>What is the technique I used?</h1>
  <div className="info_project">
    <div>
      <img src={logoHTML} alt="logo html" style={{width: "4rem"}}/>
      <h2 style={{fontSize:"15px"}}>HTML</h2>
    </div>

    <div>
      <img src={logoCSS} alt="logo css" style={{width: "4rem"}}/>
      <h2 style={{fontSize:"15px"}}>CSS</h2>
    </div>
 
    <div>
      <img src={logoJs} alt="logo java script" style={{width: "4rem"}}/>
      <h2 style={{fontSize:"15px"}}>JAVA-SCRIPT</h2>
    </div>
 
    <div>
      <img src={logoReact} alt="logo react" style={{width: "4rem"}}/>
      <h2 style={{fontSize:"15px"}}>REACT</h2>
    </div>
   </div>

  </div>
</div> */
}
