
// Add JS code to allow a new cat to be added programmatically. Do it rough and ready at first!

// var cats = document.getElementsByClass("cat");
// console.log(cats)

window.onload = function(){

var catClass = document.createElement('ul');
catClass.classList.add("cat");

var cats = document.getElementById('cats');


var li = document.createElement("li");
li.innerText = "Name: Tabby, Favourite Food: Fish";

var img = document.createElement("img");
img.src = "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg";

li.appendChild(catClass);

img.appendChild(catClass);

cats.append(catClass);






};