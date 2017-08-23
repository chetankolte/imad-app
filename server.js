var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
'article-one' : {
    title: 'Article-one | Chetan Kolte',
    heading: 'Article-one',
    date: 'Sep 5, 2017',
    content: `<h1>Hey! This is Article one</h1>
            <p>The article you are searching for seems to be in this page. That means the article will start here. And hence you can read
            your article one on this page. This is truely for demonstration purposes and it is striclty instructed to users not to expect any more</p>
            <p>This is a paragraph if you might notice</p>`
            },
'article-two' : {
        title: 'Article-two | Chetan Kolte',
    heading: 'Article-two',
    date: 'Sep 10, 2017',
    content: `<h1 style="color:green">Hey! This is Article two</h1>
            <p>The article you are searching for seems to be in this page. That means the article will start here. And hence you can read
            your article one on this page. This is truely for demonstration purposes and it is striclty instructed to users not to expect any more</p>`
},
'article-three' : {
            title: 'Article-three | Chetan Kolte',
    heading: 'Article-three',
    date: 'Sep 15, 2017',
    content: `<h1 style="color:red;">Hey! This is Article three</h1>
            <p>The article you are searching for seems to be in this page. That means the article will start here. And hence you can read
            your article one on this page. This is truely for demonstration purposes and it is striclty instructed to users not to expect any more</p>`
},
};
function createTemplate (data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = `<html>
    <head>
        <title>
        ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body>
        <h3>
        ${heading}
        </h3>
        <div>
        ${date}
        </div>
        <div align="center">
        ${content}
        </div>
    </body>
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function(req, res){
    counter = counter+1;
    res.send(counter.toString());
});

var names = [];
app.get('/submit-name/:name', function(req, res){
    //Get the name from the request
    var name = req.query.name; //TODO

    names.push(name);
    res.send(JSON.stringify(names));
});

app.get('/:articleName', function(req, res){
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});
app.get('/article-two', function(req, res){
    res.sendFile(path.join(__dirname, 'ui','article-two.html'));
});
app.get('/article-three', function(req, res){
    res.sendFile(path.join(__dirname, 'ui','article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
