import React from 'react';

const BuyMe = ({currentUser}) => {
  let greeting = "Esteemed Guest";

  if (currentUser) {
    greeting = currentUser.username;
  }
  return(
  <div>
    <h3>Hello, {greeting}!</h3>
    <br/>
    <p>Unfortunately none of the items here on Resaled are actually for sale!
    We can only offer you two things: the plesasure of uploading and perusing
    fun clothing listings, and my web development services!

    If you're interested, please select a means of contacting me below, and
    thanks for visiting!</p>

  <br/>
  <br/>
  <br/>
  <br/>
  <a href="https://github.com/Battjmo">
    <img src={window.githubURL} />
    Github
  </a>
  <br/>
  <br/>
  <br/>

  <a href="https://www.linkedin.com/in/nicholas-battjes/">
    <img src={window.linkedinURL} />
    Linkedin
  </a>


  </div>
  );
};

export default BuyMe;
