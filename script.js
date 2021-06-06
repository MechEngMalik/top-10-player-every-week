
alert("Hello football fans");
//  var names =[var lewandowski, de bruyn, haaland, cristiano ronaldo, mbappe, van dijk, kimmich, mohamed salah;neymar, messi]
// var messi; 

var person = prompt("who is your favorite player?");

if (person == "messi" || person == "ronaldo") {
  alert("your favorite player is in our list ^_^.");
}
else {
  alert("Unfortunately, your favorite player is not on the list");
}
// }else if (person =  mohamed salah){
//   alert("your favorite player in our list ^_^.")
// } else if (person =  mohamed salah){
//   alert("your favorite player in our list ^_^.")
// }else if (person =  mohamed salah){
//   alert("your favorite player in our list ^_^.")
// }else if (person =  mohamed salah){
//   alert("your favorite player in our list ^_^.")
// }else if (person =  mohamed salah){
//   alert("your favorite player in our list ^_^.")
// }else if (person =  mohamed salah){
//   alert("your favorite player in our list ^_^.")
// }else if (person =  mohamed salah){
//   alert("your favorite player in our list ^_^.")
// }else if (person =  mohamed salah){
//   alert("your favorite player in our list ^_^.")
// }else if (person =  mohamed salah){
//   alert("your favorite player in our list ^_^.")
// }else alert{"unfortunately your favorite player is not on the list"}






// *********************** pic ouput****************
var x = prompt("how many time you want to see faaotball?");
var fbshown = function () {
  var output = "";
  let i = 0;
  while (i < x) {

    output = output + "<img src='https://www.premierleague.com/resources/prod/df660c3-3506/i/nike-ball-hub/index/21.png'>"

    i++;

  }
  console.log("test");
  console.log(output);
  return output;
}
var result = fbshown();
document.write(result);

// *********************while loop****************
var goat = prompt("who is the goat: messi, ronaldo");
while (goat != "messi" && goat != "ronaldo"){
  goat = prompt ( "answer this first; who is the goat: messi, ronaldo")
}

