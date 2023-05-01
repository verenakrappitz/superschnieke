let array_one = [
    "a house of wood",
    "a house of brick",
    "a house of broken dishes",
    "a house of discarded clothing",
    "a house of dust"
  ];
  
  let array_two = [
    "among other houses",
    "among small hills",
    "among high montains",
    "by a river",
    "by an abandoned lake"
  ];

//select random element from array 01-->

function renderPoem() {
    // your code in here
  }
  
  let btn = document.querySelector("button");
  btn.addEventListener("click", renderPoem);
  
//select random element from array 02-->
let poem= document.querySelector('.poem')

//create a new element... paragraph tag-->
let paragraph= document.createElement('p')

//add the text attribute--
paragraph.textContent='${elementFromArrayOne} $
{elementFromArrayTwo}'

// append that paragraph to the div with a class poem-