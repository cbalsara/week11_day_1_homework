
// Add JS code to allow a new cat to be added programmatically. Do it rough and ready at first!

// var cats = document.getElementsByClass("cat");
// console.log(cats)

window.onload = function(){

var catClass = document.createElement('ul');
catClass.classList.add("cat");

var cats = document.getElementById('cats');


var li1 = document.createElement("li");
li1.innerText = "Name: Garfield" ;

var li2 = document.createElement("li");
li2.innerText = "Favourite Food: Lasagne";

var img = document.createElement("img");
img.src = "http://comicsalliance.com/files/2015/06/garfield01.jpg"

catClass.appendChild(li1);

catClass.appendChild(li2);

catClass.appendChild(img);

cats.appendChild(catClass);






};