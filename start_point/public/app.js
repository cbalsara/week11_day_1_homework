
// // var cats = document.getElementsByClass("cat");
// // console.log(cats)


// // Add JS code to allow a new cat to be added programmatically. Do it rough and ready at first!

// window.onload = function(){

// // which section will you be working in?
// var cats = document.getElementById('cats');

// // where are you actually adding the new information?
// var catClass = document.createElement('ul');
// catClass.classList.add("cat");

// // what new information will you be adding? 
// var li1 = document.createElement("li");
// li1.innerText = "Name: Garfield" ;

// var li2 = document.createElement("li");
// li2.innerText = "Favourite food: Lasagne";

// var img = document.createElement("img");
// img.src = "http://comicsalliance.com/files/2015/06/garfield01.jpg"

// // need to link up all the var to their parent now
// // (use the indentation in the index.html as the hint to see the family tree)
// catClass.appendChild(li1);
// catClass.appendChild(li2);
// catClass.appendChild(img);
// cats.appendChild(catClass);
// };

// Refactor the code to make it easy to add a new cat, just like we did with the quotes.

window.onload = function(){

var catClass = createUl("Garfield", "Lasagne");

};


var createUl = function(name, food){
  var li1 = createList1(name);
  var li2 = createList2(food);
  var catClass = document.createElement('ul');
  catClass.appendChild(li1);
  catClass.appendChild(li2);
  cats.appendChild(catClass);
  catClass.classList.add("cat");
  return catClass;
};

var createList1 = function(name){
  var li1 = document.createElement("li");
  li1.innerText = name;
  return li1;
};

var createList2 = function(food){
  var li2 = document.createElement("li");
  li2.innerText = food;
  return li2;
};







