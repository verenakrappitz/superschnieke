const people = [
  { name: "adri" },
  { name: "becky" },
  { name: "chris" },
  { name: "dillon" },
  { name: "evan" },
  { name: "frank" },
  { name: "georgette" },
  { name: "hugh" },
  { name: "igor" },
  { name: "jacoby" },
  { name: "kristina" },
  { name: "lemony" },
  { name: "matilda" },
  { name: "nile" },
  { name: "ophelia" },
  { name: "patrick" },
  { name: "quincy" },
  { name: "roslyn" },
  { name: "solene" },
  { name: "timothy" },
  { name: "uff" },
  { name: "violet" },
  { name: "wyatt" },
  { name: "xavier" },
  { name: "yadri" },
  { name: "zack" }
];

const searchBar = document.querySelector("input");
const ul = document.querySelector("ul");
const clearButton = document.getElementById('clear')

//---------- RENDER NAMES TO PAGE
function renderNamesToPage(results) {
  // [1] iterate of the dataset
  for(let i = 0; i < results.length; i++){
    // [2] create the list item
    let listItem = document.createElement('li');
    // [3] add a class to the list item
    listItem.classList.add('text-color')
    // [4] grab each name and add it to the list item
    listItem.textContent = results[i].name
    // [5] append the list time to the unordered list
    ul.appendChild(listItem)

  }
}
renderNamesToPage(people);

//---------- SEARCH DATASET FOR SPECIFIC NAME
function searchNames(event) {
  console.log(event.target.value)
  let searchQuery = event.target.value.toLowerCase(); // jacob

  const searchedName = people.filter(function(person){
    if(searchQuery){
      return person.name.includes(searchQuery)
    }
  })

  displaySearched(searchedName)
}
searchBar.addEventListener("keyup", searchNames);

//---------- DISPLAY ONLY THE SPECIFIC NAME
function displaySearched(names) {
  // console.log('search value: ', names[0])
  clearList()
  // iterate over the searched names
  for(let i = 0; i < names.length; i++){
    // create list item
    let listItem = document.createElement('li')
    // grab each name and add it to the list item
    listItem.textContent = names[i].name
    // append the search results to the unordered list
    ul.appendChild(listItem)
  }

}

//---------- CLEAR LIST BEFORE RENDERING SPECIFIC NAME
function clearList() {
  ul.innerHTML = ""
}

//---------- CLEAR FORM WITH BUTTON
function clearSearchForm() {
  searchBar.reset()
}
clearButton.addEventListener('click', clearSearchForm)