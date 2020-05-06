const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

nightmare
  .goto('https://google.com')
  .type("input","w3schools")
  .click(".gNO89b")
  .run(function(err,nightmare){
    if(!err){
      console.log("success");
    }
  })
  

/*
nightmare
  .goto('https://google.com')
  .type("input","w3schools")
  .click(".gNO89b")
  .run(function(err,nightmare) {
    if(!err){
        console.log("success");
    }
  });
*/