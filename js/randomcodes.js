// Function to generate combination of characters 
function generateCode(){
// Time to create variables to store the generated codes 
    var code = '';  // This will create and empty value that we can fill with the randomly generated code 
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';

//Generate character multiple times using a loop 
    for (i= 1; i <= 8; i++){
        var char = Math.random()* str.length; //this code will randomly select a character from the variable str then store it in a new variable
        code+=str.charAt(char)  //now it'll take 8 accumulated new variables and store it in char
    }
    return code; //now itll output the full string of random characters 
}



//This pulls everything and puts in into the HTML 

document.getElementById("codes").innerHTML = generateCode(); 

//Disable Button
function disableButton()  {
    document.getElementById("button").disabled = true;
}
//Activate function 
disableButton(); 