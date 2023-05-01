import React, {useState} from 'react'

const Projects = () => {

  //State for toggle project overlay
  const [isOverlayVisible,setOverlayVisible]=useState(false);
  const [clickedElement, setClickedElement]=useState('');
  const [clickedVideoElement, setClickedVideoElement]=useState('');
  const [isVideoVisible, setVideoVisible]=useState(false)

  //Toggle overlay handler
  const toggleOverlay = (e) => {
    const clickedElementID = e.currentTarget.getAttribute('id');
    setClickedElement(clickedElementID);   
    setOverlayVisible(!isOverlayVisible);   
  }

  //Toggle video handler
  const toggleVideo = (e)=>{
    const clickedVideoElementID = e.currentTarget.getAttribute('id');
    setClickedVideoElement(clickedVideoElementID); 
    setVideoVisible(!isVideoVisible);
  }

  return (
    <div>

      <div className='content_header'>
        <h3>Projects</h3>
        <p>Here you can find example projects that I have made to demonstrate my skills.</p>
        <p>Click on any project to find out more about it</p>
      </div>

      <div className='project_container'>

           <div className="project">            
              <a href="#" onClick={toggleOverlay} id="project1">
                <div className = "projectline project1">
                    <div className = "project_link project1">
                      <div className='project_contents'  >
                        <h4>Blog</h4>  
                        <img src="images/blog.png" alt="Blog Screen shot" className='project_thumb'/>
                        <p>Fully functional blog made using React with a NodeJS backend API</p> 
                      </div>
                    </div>  
                </div>
              </a>
            </div>

            <div className="project">            
              <a href="#"  id="project2" onClick={toggleOverlay}>
                <div className = "projectline project2">
                    <div className = "project_link project2">
                      <div className='project_contents'>
                        <h4>Pizza Delivery Website</h4>  
                        <img src="images/pizzadelivery.png" alt="Example Online Retailer Screen shot" className='project_thumb'/>
                        <p>A website for a fictional pizza delivery company. Written using NodeJS using express and EJS</p>  
                      </div>
                    </div>  
                </div>
              </a>
            </div>

            <div className="project">
              <a href="#" id="project3" onClick={toggleOverlay}>
                <div class = "projectline project3">
                    <div class = "project-link project3">
                        <div className='project_contents'>
                            <h4>Job Search Web Scraper</h4>
                            <img src="images/jobsearch.png" alt="Job Search Web Scraper" className='project_thumb'/>
                            <p>A web scraping app that searches multiple sites for job adverts and returns them in a list</p>                             
                        </div>
                    </div>
                </div>
              </a>
            </div>

            <div className="project">            
              <a href="#" id="project4" onClick={toggleOverlay}>
                <div className = "projectline project4">
                    <div className = "project_link project4">
                      <div className='project_contents'>
                        <h4>Materials Calculator</h4>  
                        <img src="images/materials01.png" alt="Materials Calculator Screen shot" className='project_thumb'/>
                        <p>Small web app that makes calculations useful in material estimating. One of my first web applications.</p>    
                      </div>
                    </div>  
                </div>
              </a>
            </div>

            {/* Project Overlay Start */}

            {isOverlayVisible && (

              <div className="overlay">                
                
                {/* Project1 Blog Start*/}
                
                {clickedElement=='project1' &&
                 <div className="overlay_content">     

                  <div className='project_overlay_header'>
                     <h3>Blog</h3>
                  </div>

                  <div className='project_overlay_columns'>
                      <div className='project_left_column'>                  
                        <img src="images/blog.png" alt="Blog Screen shot" className='project_img'/>
                        <p>This is a blog app that consists of a React front-end, a Node.js API, and a MongoDB database. The React front-end uses Redux for state management and RTK Query for API data fetching. 
                          This means that the app uses a modern, efficient way of managing state and data fetching.</p>                  
                        <p>Users of the app can view blog posts, create new blogs, edit existing blogs, and delete blogs. The app uses the Node.js API to communicate with the MongoDB database to retrieve and store data.</p>
                      </div>  

                      <div className='project_right_column'>
                        <h5>Links</h5>
                      
                        <ul>
                          <li><a href="https://pwblog.onrender.com/" target="_blank">Visit Site</a></li>
                          <li><a href="https://github.com/Yippiekaiaii/blog-frontend" target="_blank">Github Front End <img src="images/icons/github.png" alt="Github" className="project_icons"/></a></li>
                          <li><a href="https://github.com/Yippiekaiaii/blog-backend" target="_blank">Github Back End <img src="images/icons/github.png" alt="Github" className="project_icons"/></a></li>
                        </ul>

                        <p className="loadtimes_message">Please note when visiting the site that it is hosted on a free service and so is likely dormant and may take longer to load than it normally would when first visiting</p>

                      </div>
                  </div>

                  <button onClick={toggleOverlay} className="close_project_btn">Close </button>
                 </div>
                } 

                {/* Project1 Blog End*/}               
              
                {/* Project2 Pizza Retailer Start*/}
                
                {clickedElement=='project2' &&
                 <div className="overlay_content">     

                  <div className='project_overlay_header'>
                     <h3>Pizza Delivery Website</h3>
                  </div>

                  <div className='project_overlay_columns'>
                      <div className='project_left_column'>                  
                        <img src="images/pizzadelivery.png" alt="Pizza Delivery Screen shot" className='project_img'/>
                        <p>This website was made to demonstrate my full stack web development skills as part of my first portfolio.</p> 
                        <p>The server side was written using Node.JS and features packages such as express, passport and bcrypt. It uses EJS to handle views and mongoose to connect to a MongoDB Atlas cluster.</p>
                        <p>The styling was done using Bootstrap</p>    
                      </div>  

                      <div className='project_right_column'>
                        <h5>Links</h5>
                      
                        <ul>
                          <li><a href="https://petespizzas.herokuapp.com/" target="_blank">Visit Site</a></li>
                          <li><a href="https://github.com/Yippiekaiaii/PizzaDelivery" target="_blank">Github<img src="images/icons/github.png" alt="Github" className="project_icons"/></a></li>                          
                        </ul>

                        <p className="loadtimes_message">Please note when visiting the site that it is hosted on a free service and so is likely dormant and may take longer to load than it normally would when first visiting</p>

                      </div>
                  </div>

                  <button onClick={toggleOverlay} className="close_project_btn">Close </button>
                 </div>
                } 

                {/* Project2 Pizza Retailer End*/}     


                {/* Project3 Job Search Start*/}
                
                {clickedElement=='project3' &&
                 <div className="overlay_content">     

                  <div className='project_overlay_header'>
                     <h3>Job Search Web Scraper</h3>
                  </div>

                  <div className='project_overlay_columns'>
                      <div className='project_left_column'>                  
                        <img src="images/jobsearch.png" alt="Job Search Screen shot" className='project_img'/>
                        <p>The intent with this project was to make a simple app that pulls job search data from multiple web sites for more efficient searching</p>
                        <p>The server side was written using Node.JS and puppeteer which takes the user search input, opens multiple websites and then retrieves jobs listings. It then desplays the results in a listing from which the individual job links can be directly accessed</p>
                      </div>  

                      <div className='project_right_column'>
                        <h5>Links</h5>
                      
                        <ul>
                          <li><a href="#" onClick={toggleVideo} id="video_project3">Video<img src="images/icons/film.png" alt="Video" className="project_icons"></img></a></li>
                          <li><a href="https://github.com/Yippiekaiaii/jobsearch" target="_blank">Github<img src="images/icons/github.png" alt="Github" className="project_icons"/></a></li>                          
                        </ul>

                        <p className="loadtimes_message"></p>

                      </div>
                  </div>

                  <button onClick={toggleOverlay} className="close_project_btn">Close </button>
                 </div>
                } 

                {/* Project3 Job Search End*/}    

                {/* Project4 Materials Calculator Start*/}
                                
                {clickedElement=='project4' &&
                 <div className="overlay_content">     

                  <div className='project_overlay_header'>
                     <h3>Materials Calculator</h3>
                  </div>

                  <div className='project_overlay_columns'>
                      <div className='project_left_column'>                  
                        <img src="images/materials01.png" alt="Materials Calculator Screen shot" className='project_img'/>
                        <p>In my role as a Purchasing Manager I often had to make detailed calculations that estimated how much material was needed for a given project. I also had requirements to work out margin, markup, labour and sizes from scale drawings</p>
                        <p>Seeing the need to speed this up I set about making a small app that performed these calculations quickly and without needing understanding of the maths behind them.</p>
                        <p>Orginally made in C# as a desktop app, I then converted it to a web based app so that it could easily be used on mobile devises using responsive design. It demostrates a use of Javascript to make the calculations some of which use arrays to compare dimentions etc.</p>
                        <p>This app was used extensively in a working environment.</p>
                      </div>  

                      <div className='project_right_column'>
                        <h5>Links</h5>
                      
                        <ul>
                          <li><a href="https://yippiekaiaii.github.io/signage-calculator/" target="_blank">Visit Site</a></li>
                          <li><a href="https://github.com/Yippiekaiaii/signage-calculator" target="_blank">Github<img src="images/icons/github.png" alt="Github" className="project_icons"/></a></li>                          
                        </ul>

                        <p className="loadtimes_message"></p>

                      </div>
                  </div>

                  <button onClick={toggleOverlay} className="close_project_btn">Close </button>
                 </div>
                } 

                {/* Project4 Materials Calculator End*/}    
              </div>              
            
            )}

            {/* Project Overlay End */}


            {/* Video Overlay Start */}

            {isVideoVisible && (
            
              <div className="video_overlay">
             
              {clickedVideoElement=='video_project3' &&
                <div className="video_container">
                  <video src="video/jobsearchdemo.mp4" controls className="project_video">               
                    Your browser does not support the video tag.
                  </video>
                </div>
              }

              <button onClick={toggleVideo} className="close_video_btn">Close</button>                         
              </div>
            
            )}

            {/* Video Overlay End */}

      </div>
    
    </div>
  )
}

export default Projects
