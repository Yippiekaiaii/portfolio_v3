
let project = document.querySelectorAll(".project-link");
console.log(project);
let getLatestOpenedProject;
let windowWidth = window.innerWidth;

if (project){
    project.forEach(function(projectline,index){
       projectline.onclick = function(){
             let container = document.body;
             
             //create new container
             let newProjectWindow = document.createElement("div");
             container.appendChild(newProjectWindow);
             newProjectWindow.setAttribute("class","project-window");
             
             //create close button
             let closeBtn = document.createElement("a");  
             let closeBtnText = document.createTextNode("Close");           
             closeBtn.appendChild(closeBtnText);
             newProjectWindow.appendChild(closeBtn);             
             closeBtn.setAttribute("onclick","closeProject()");
             closeBtn.setAttribute("class","project-close-btn");

             //create project content div
             let newProjectContainer = document.createElement("div");
             container.appendChild(newProjectContainer);
             newProjectContainer.setAttribute("class","project-detail-wrapper");

             //Fill in content depending on which is clicked   

            projectClass = projectline.className;
           
            if (projectClass.includes("project1")){
                //project 1 html here
                newProjectContainer.innerHTML = "<div><h3>Pizza Delivery Example</h3><div class='example'><a href='https://petespizzas.herokuapp.com/' target='_blank'><img class='exampleImage' src='images/pizzadelivery.png'></a><div class='exampleSide'><ul class = 'exampleList'><li><h4>Demonstrates:</h4></li><li>Node.JS</li><li>Express</li><li>Back end database using Mongoose</li><li>User Authentication using passport</li><li>Bootstrap</li></ul><p>please click the image to take you to the example</p></div></div><p></p><p>This website was made to demonstrate my full stack web development skills as part of my first portfolio.</p> <p>The server side was written using Node.JS and features packages such as express, passport and bcrypt. It uses EJS to handle views and mongoose to connect to a MongoDB Atlas cluster.</p><p>The client side uses Bootstrap for responsive design.</p></div>";             
            } else if (projectClass.includes("project2")){
                //project 2 html here
                newProjectContainer.innerHTML = "<div><h3>Job Search Web Scraper</h3><div class='example'><a href='#' target='_blank'><img class='exampleImage' src='images/jobsearch.png'></a><div class='exampleSide'><ul class = 'exampleList'><li><h4>Demonstrates:</h4></li><li>Node.JS</li><li>Express</li><li>Puppeteer</li><li>Bootstrap</li></ul><p>please click the image to take you to the example</p></div></div><p></p><p>The intend with this project was to make a simple app that pulls job search data from multiple web sites for more efficient searching</p><p>The server side was written using Node.JS and puppeteer which takes the user search input, opens multiple websites and then retrieves jobs listings. It then desplays the results in a listing from which the individual job lisitngs can be directly accessed</p></div>";
            } else if (projectClass.includes("project3")){
                //project 3 html here
                newProjectContainer.innerHTML = "<div><h3>Materials Calculator</h3><div class='example'><a href='https://yippiekaiaii.github.io/signage-calculator/' target='_blank'><img class='exampleImage' src='images/materials01.png'></a><div class='exampleSide'><ul class = 'exampleList'><li><h4>Demonstrates:</h4></li><li>HTML</li><li>CSS</li><li>Javascript</li></ul><p>please click the image to take you to the example</p></div></div><p>In my role as a Purchasing Manager I often had to make detailed calculations that estimated how much material was needed for a given project. I also had requirements to work out margin, markup, labour and sizes from scale drawings</p><p>Seeing the need to speed this up I set about making a small app that performed these calculations quickly and without needing understanding of the maths behind them.</p><p>Orginally made in C# as a desktop app, I then converted it to a web based app so that it could easily be used on mobile devises using responsive design. It demostrates a use of Javascript to make the calculations some of which use arrays to compare dimentions etc.</p><p>This app was used extensively in a working environment.</p></div>";
            } else if (projectClass.includes("project4")){
                //project 4 html here
                newProjectContainer.innerHTML = "<div><h3>Photo Gallery</h3><div class='example'><a href='https://yippiekaiaii.github.io/Photo-Gallery/' target='_blank'><img class='exampleImage' src='images/photogallery.png'></a><div class='exampleSide'><ul class = 'exampleList'><li><h4>Demonstrates:</h4></li><li>HTML</li><li>CSS</li><li>Javascript</li></ul><p>please click the image to take you to the example</p></div></div><p>This is an example of a photo gallery page that I made. If you click on an image thumbnail a Javascript function is called that creates an overlay that shows the iamge full size. It also has buttons to cycle through the images once opened that also uses Javascript</p></div>";
            } else {
                newProjectContainer.innerHTML = "An error has been made";
            }
       
            }

    });
}

function closeProject() {    
    document.querySelector(".project-window").remove();
    document.querySelector(".project-detail-wrapper").remove();
}

function showVideo() {
    document.getElementById("project2-video").style.display = "block";
}

function hideVideo() {
    document.getElementById("project2-video").style.display = "none";
} 