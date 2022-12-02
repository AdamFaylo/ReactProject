import React from "react";
import "../components/CssControls/home.css";
import { HiOutlinePencilAlt } from "react-icons/hi";

const HomeComponents = () => {
  return (
    <div className="top_main">
      <div className="img_style">
        <div>
          <h2>What is the purpose of the site? </h2>
          <p>
            The purpose of the description is to <br />
            bring the user the option to be updated on new/old <br />
            movies Search for customer favorite genres.
          </p>
        </div>
      </div>
      <div className="main_2">
        <div>
          <h2>The project is displayed on web pages in a browser like:</h2>
        </div>
        <div className="main_2_box_2">
          <h2>Home</h2>
        </div>
        <div className="main_2_box_3">
          <h2>Movies</h2>
        </div>
        <div className="main_2_box_4">
          <h2>Favorites</h2>
        </div>
        <div className="main_2_box_5">
          <h2>Comment</h2>
        </div>
        <div className="main_2_box_6">
          <h2>About</h2>
        </div>
        <div className="main_2_box_7">
          <h2>Click</h2>
        </div>
      </div>
      <div className="main_3">
        <div>
          <h3>Upper Header</h3>
          <p>
            on the left side an icon. <br />
            of the website and. <br />
            on the right side the DARCK MODE button.
          </p>
          <br />
          <h3>Lower Header</h3>
          <p>
            you can find web pages such as: <br />
            HOME,MOVIES,FAVORITES,COMMENT,ABOUT ME
          </p>
        </div>
        <div>
          <h2>
            The Header is divided <br />
            into two parts, <br /> upper and lower.
          </h2>
        </div>
      </div>
      <div className="main_4">
        <div>
          <h3>What can be found on the movies page ?</h3>
        </div>
        <div>
          <p>Division by categories</p>
        </div>
        <div>
          <p>Search movies</p>
        </div>
        <div>
          <p>Transition between pages</p>
        </div>
        <div>
          <p>Filter by ABC</p>
        </div>
        <div>
          <p>Filtering on ratings</p>
        </div>
      </div>
      <div className="main_5">
        <div>
          <h2>
            In HOME you can get an overview of the entire <br /> site with
            points used in the Spheric of REACT.
          </h2>
        </div>
        <button>CLICK HERE</button>
      </div>
      <div className="main_6">
        <div>
          <h3>The HOME page and possibility</h3>
        </div>
        <div>
          <p>
            On the MOVIE page, you can dive into the details of the movie by
            clicking on the tab.
          </p>
        </div>
        <div>
          <p>Option also to save the loving movie by clicking on the heart.</p>
        </div>
        <div>
          <p>By clicking on the X you can delete the movie permanently.</p>
        </div>
      </div>
      <div className="main_7">
        <div>
          <h3>The Favorites page</h3>
          <p>
            On this page you can get all your favorite <br /> tabs and you can
            also remove the movie <br /> from the list by clicking on the heart.
          </p>
        </div>
        <div>
          <h3>The Comments page</h3>
          <p>
            This area allows you to comment on your favorite movie.
            <br />
            You can extend the response. <br />
            You could delete the comment. <br />
            You could add a comment.
          </p>
        </div>
      </div>
      <div className="main_8">
        <div>
          <h3>The About page</h3>
          <p>
            Here I summarized myself and my experience in the programming world.{" "}
            <br />
            What technology did I use on the site?
          </p>
        </div>
      </div>
      <div className="main_9">
        <h3>AND MORE NICE FEATRS:</h3>
        <p>
          DARK MODE button - ability to darken the site. <br /> Clicking on the
          icon on the site returns to the main HOME page.
        </p>
      </div>
      <div className="main_10">
        <h3>What technology did I use?</h3>
        <p>REACT.CSS, HTML, JAVASCRIPT</p>
        <p>The REACT library</p>
        <p>Import the REACT Toolkit API</p>
        <p>Responsive use throughout the site</p>
      </div>
    </div>
  );
};

export default HomeComponents;
