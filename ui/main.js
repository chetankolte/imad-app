//counter
var button = document.getElementById('counter');
var counter=0;
button.onclick = function(){
    //Create a request object
    var request = new XMLHttpRequest();
 
    //Capture a response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //Take some action
        if (request.status === 200){
            var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            
        }
    }
    };
    //make the request
    request.open('GET', 'http://chetankolte56.imad.hasura-app.io/counter', true);
    request.send(null);
};