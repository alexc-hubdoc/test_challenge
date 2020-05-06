/*
// Part 1: however the id is null, so is this really useful?
let id  = document.getElementsByTagName("input")[3].id;
// Part 2
let title = document.getElementsByTagName("input")[3].title;
*/

// Part 3: Is this what they meant by JQuery?
const url = 'https://google.com';
let request = require("request"), cheerio = require("cheerio");
request(url, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body);
    let inputs = $("input");
    let titles = [];  
    console.log(inputs.length);
    for(i = 0; i < inputs.length; i++) {
        //console.log(inputs[i].attribs);
        if(inputs[i].attribs.title){
            // part 2
            console.log(inputs[i].attribs.title);
            titles.push(inputs[i].attribs.title);
        }        
    }   
    console.log(titles.length);
  } else {
    console.log("We've encountered an error: " + error);
  }
});

// Part 4
var x = document.getElementsByTagName("input")[3].value

// Part 5
document.getElementsByTagName("input")[6].click();

// Part 6
let array = document.getElementsByTagName("h3");
let parents = [];
for(let i = 0; i < array.length; i++) {
  parents.push(array[i].parentElement.href);
  console.log(array[i].parentElement.href);
}

// Part 7
$("div p")[1];
