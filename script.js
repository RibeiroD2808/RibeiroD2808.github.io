var smallProjects = document.getElementsByClassName("smallProjects");

function setDefaultSmallProjects(){
    for(const project of smallProjects){
        project.setAttribute("style", "width:30 %; aspect-ratio: 1/1; background-color: red; margin: 1.3rem;");
    }    
}

for(const project of smallProjects){
    //all images inside div
    let images = project.getElementsByTagName("img");
    let imageN = 0;
    console.log(images.length);
    //mouse in
    project.addEventListener("mouseover", function(){
        project.getElementsByTagName("p")[0].style.display = "none";
        project.getElementsByTagName("div")[0].style.display = "none";
        images[imageN].style.display = "block";
        console.log("in");
    })

    //mouse out
    project.addEventListener("mouseleave", function(){
        project.getElementsByTagName("p")[0].style.display = "block";        
        project.getElementsByTagName("div")[0].style.display = "flex";
        //hideCollection(images);
        console.log("Out");
    })

    //click
    project.addEventListener("click", function(){
        console.log(imageN);
        console.log(images.length - 1);
        

        images[imageN].style.display = "none";
        imageN ++;
        if(imageN == images.length)
            imageN = 0;
        images[imageN].style.display = "block";
        
    })
}

function hideCollection(collection){
    for( const elem of collection){
        elem.style.display = "none";
    }
}