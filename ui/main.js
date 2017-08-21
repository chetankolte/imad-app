console.log('Loaded!');
//Change the text
var element = document.getElementById('main-text');
element.innerHTML = 'New Value';
//Move the image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft + 2;
    img.style.marginLeft = marginLeft + "px";
}
img.onclick = function(){
    var interval = setInterval(moveRight, 50);
};

//counter
var button = document.getElementById("counter");
var counter=0;
button.onclick = function(){
    
    //make a request to the counter endpoint
    
    //Capture a response and store it in a variable
    
    //Render the variable in the correct span
    counter = counter+1;
    var span = getElementById("count");
    span.innerHTML = counter.toString();
};