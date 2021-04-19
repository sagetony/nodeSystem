const fetch = require('node-fetch');

var url = "http://jsonplaceholder.typicode.com/posts"

var settings = {method: "Get"};

fetch(url, settings)
    .then(res=> res.json())
    .then((json) =>{
        console.log(json);
    })