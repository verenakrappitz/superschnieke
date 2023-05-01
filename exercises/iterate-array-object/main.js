console.log('this works');

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
    { name: "x" },
    { name: "yadri" },
    { name: "zack" }
  ];

const blade = {
    title: 'Blade',
    director: 'Stephen Norrington',
    actors: ['Wesley Snipes', 'Stephen Dorff', 'Kris Kristofferson'],
    releaseYear: 1998,
    duration: 120,
    extendedCut: function(){
      return this.duration + 25
    }
   };

   const ul = document.querySelector('ul');

   function renderNamesToPage(array){

   for(let i=0;i<people.length;i++){
    let li= document.createElement('li');
    li.textContent = people[1].name
    URL.appendChild(li)
   }
}

   renderNamesToPage(people)