//counter
var button = document.getElementById('counter');
var counter=0;
button.onclick = function(){
    
    //make a request to the counter endpoint
    
    //Capture a response and store it in a variable
    
    //Render the variable in the correct span
    counter = counter+1;
    var span = getElementById('count');
    span.innerHTML = counter.toString();
};