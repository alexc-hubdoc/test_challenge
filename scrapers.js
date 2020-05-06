// npm install cheerio request

const url = 'https://google.com';
/*
Parts 1-3
- using Jquery
- to-do: use javascript for title?
*/
let request = require("request"), cheerio = require("cheerio");
request(url, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body);
    let inputs = $("input");
    let ids = []; 
    let titles = [];
    let searchInput = [];
  
    console.log(inputs.length);
    console.log(inputs[5].attribs);
    for(i = 0; i < inputs.length; i++) {
        console.log(inputs[i].attribs);
        if(inputs[i].attribs.id){
            // part 1
            //console.log(inputs[i].attribs.id);
            ids.push(inputs[i].attribs.id);
        }        
        if(inputs[i].attribs.value){
          
        }
        if(inputs[i].attribs.title){
            // part 2
            //console.log(inputs[i].attribs.title);
            titles.push(inputs[i].attribs.title);
        }        
    }   
    console.log(ids.length);
    console.log(titles.length);
    console.log(searchInput.length);

  } else {
    console.log("We've encountered an error: " + error);
  }
});