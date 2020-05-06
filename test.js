// Part 6
// Using cheerios
let request = require("request"), cheerio = require("cheerio");
let count = 0;
url = "https://www.google.com/search?source=hp&ei=Fn2wXpf1Jo2yaq21uYAN&q=test&oq=test&gs_lcp=CgZwc3ktYWIQDDICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6DggAEOoCELQCEJoBEOUCOgUIABCDAVD-jQFY_5YBYL-sAWgDcAB4AIABwAKIAaUKkgEFMi00LjGYAQCgAQGqAQdnd3Mtd2l6sAEG&sclient=psy-ab&ved=0ahUKEwiX2MqFiJvpAhUNmRoKHa1aDtAQ4dUDCA0";
request(url, function (error, response, body) {
  if (!error) {
    let $ = cheerio.load(body);
    
    console.log(count);
  } else {
    console.log("We've encountered an error: " + error);
  }
});