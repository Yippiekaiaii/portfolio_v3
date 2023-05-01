import React from 'react'

const About = () => {
  return (
    <div className="about_page">         
      
      <div className="about_wrapper">

        <div className="content_header">
          <h3>About Me</h3>
        </div>
      
          <p>As a highly motivated self-taught programmer, I am seeking my first software development position. Despite having worked in other fields throughout my career thus far, I have always been drawn to the prospect of transitioning into my dream role as a software developer.</p>
          <p>My fervent drive to learn new programming languages, frameworks, and skills fuels my passion for continuous improvement. As such, I devote a significant amount of my spare time to studying and practicing various programming concepts.</p>
          <p>To date my skills include the following but I am dedicated to honing my skills further and to achieving success in the field of software development.</p>       

          <ul className="about_list">
              <li>React</li>
              <li>Node.js</li>
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>C#</li>
              <li>SQL</li>
          </ul>

          <div className = "about_icons">
              <img src="images/icons/react.png"/>  
              <img src="images/icons/nodejs.png"/>  
              <img src="images/icons/java-script.png"/>           
              <img src="images/icons/html.png"/>
              <img src="images/icons/css-3.png"/>
              <img src="images/icons/bootstrap.png"/>                                   
              <img src="images/icons/c-sharp.png"/>            
          </div>

      </div>

      <img src="images/peter.jpg" alt="Picture of Peter"/>

    </div>
  )
}

export default About
