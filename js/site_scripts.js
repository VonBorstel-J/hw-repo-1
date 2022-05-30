   /* --------PARTNERS---------- */ 

//Creating a script for the partners images to be pulled from 
function partnersGallery() {
        
    var photos = []; //Declaring an empty array to store image element 
    var fileNames = []; //Declaring an empty element to store image file names 
    var imageList = []; //Declare an emplty array to store html list that contain an image
    var image; //Declaring an empty variable to store the assembled image list codes
    var openList = "<li id='photo'>"; //Picking the variable to conatin open list tag
    var closeList = "</li>"; //Picking the variable to close the list tag


//Create a loop to create 6 images starting with index of 0 

for(var i=0; i<6; i++) {
    fileNames.push("partner"+(i+1)); //Creating an image file name and store in the array
    photos.push("<img src= images/"+fileNames[i]+".png>"); //Assemble file name into image element and store in an array 
    image = openList + photos[i] + closeList; //Assemble image element from array with list elements and store in a variable
    imageList.push(image); //Store(push) the assembled list codes into an array
}

//Display all six image codes stored in the array 
document.getElementById("album").innerHTML = imageList;
}
    partnersGallery();
