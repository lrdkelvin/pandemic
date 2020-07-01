var num1 = 2;
var num2 = 5;
var num3 = 7;
var num4 = 1;

console.log(num1);

var numarray = [];

numarray.push(num1);
numarray.push(num2);
numarray.push(num3);
numarray.push(num4);

console.log(numarray);




numarray.sort((a,b) => a-b);



var axios = require("axios");

axios.get("http://www.omdbadapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
  function(response) {
    console.log("The movie's rating is: " + response.data.imdbRating);
  }
)
