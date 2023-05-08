console.log('this works')

//---------- DATASET

const data = [
  //PLANTS
  {
    name: "Lemna minor",
    category: "Plants",
    image:
      "https://user-images.githubusercontent.com/122947570/236676104-e8f59069-d207-4919-966c-183d57974332.png"
  },
  {
    name: "Limnocharis flava",
    category: "Plants",
    image:
      "https://user-images.githubusercontent.com/122947570/236676105-46732ec6-b9f9-4681-b927-710628cb2c44.png"
  },
  {
    name: "Megathyrsus Maximus",
    category: "Plants",
    image:
      "https://user-images.githubusercontent.com/122947570/236676106-996f5322-abc7-4305-bec4-d8aa83ff3752.png"
  },
  {
    name: "Persicaria glabra Kopie",
    category: "Plants",
    image:
      "https://user-images.githubusercontent.com/122947570/236676107-24b972aa-c576-48f3-b661-967a27003d6c.png"
  },
  {
    name: "Pontederia crassipes",
    category: "Plants",
    image:
      "https://user-images.githubusercontent.com/122947570/236676108-3eba1854-8ce5-47b6-aab6-c179108f501c.png"
  },
  {
    name: "Thalia Geniculata",
    category: "Plants",
    image:
      "https://user-images.githubusercontent.com/122947570/236676109-255f0c86-7e11-4dce-94b4-a13b5463c8ed.png"
  },
  {
    name: "Typha Latifolia",
    category: "Plants",
    image:
      "https://user-images.githubusercontent.com/122947570/236676110-9d882146-5abd-431d-b07c-dae02dec0efd.png"
  },
  {name: "Victoria Amazonica",
  category: "Plants",
  image:
    "https://user-images.githubusercontent.com/122947570/236676111-ee2e1494-173e-46a0-982e-f6c0ea1f28dc.png"
  },
  {name: "Alge",
  category: "Plants",
  image:
    "https://user-images.githubusercontent.com/122947570/236676112-7aa26235-37f0-4972-b1a5-8de7fb92951a.png"
  },
  {name: "Cortaderia Selloana",
  category: "Plants",
  image:
    "https://user-images.githubusercontent.com/122947570/236676113-383736ca-10b0-4a5d-a1f0-3d0a641adada.png"
  },
  {name: "Cyperus Acuminatus",
  category: "Plants",
  image:
    "https://user-images.githubusercontent.com/122947570/236676114-74be8195-58e8-4844-b2c3-468ea45591e0.png"
  },
  {name: "Hymenachne Amplexicaulis",
  category: "Plants",
  image:
    "https://user-images.githubusercontent.com/122947570/236676116-6f006088-d14f-4601-9142-2bd0e02749d6.png"
  },

  // BIRDS
  {
    name: "Andean Emerald",
    category: "Birds",
    image:
      "https://user-images.githubusercontent.com/122947570/236608827-0cb407e3-1f14-450f-8169-2c5f6eb14a57.png"
  },
  {
    name: "Berlepsch Tinamou",
    category: "Birds",
    image:
      "https://user-images.githubusercontent.com/122947570/236608829-60ddd958-1008-4aa8-85eb-df600657fc2e.png"
  },
  {
    name: "Black Tinamou",
    category: "Birds",
    image:
      "https://user-images.githubusercontent.com/122947570/236608830-b186db8e-8076-4c45-8103-4f3e08a7077d.png"
  },
  {
    name: "Black and White Warbler",
    category: "Birds",
    image:
      "https://user-images.githubusercontent.com/122947570/236608831-76b4ca4f-91fa-4dbc-8f13-87e5a48419b3.png"
  },
  {
    name: "Bronze Tailed Plumeleteer",
    category: "Birds",
    image:
      "https://user-images.githubusercontent.com/122947570/236608832-ec5fc20a-8ea1-4d9b-a497-f936d4472df3.png"
  },
  {
    name: "Buff Breasted Sandpiper",
    category: "Birds",
    image:
      "https://user-images.githubusercontent.com/122947570/236608833-e1bcf30a-4078-4d77-b474-a179552b0d64.png"
  },
  {name: "Cedar Waxwing",
  category: "Birds",
  image:
    "https://user-images.githubusercontent.com/122947570/236608834-affe4888-1906-4c4d-bfcc-1d8026f44c93.png"
  },
  {name: "Flame Rumped Tanager",
  category: "Birds",
  image:
    "https://user-images.githubusercontent.com/122947570/236608835-895938d3-8bc8-45c2-8259-e65952cd28cf.png"
  },
  {name: "Great Tinamou",
  category: "Birds",
  image:
    "https://user-images.githubusercontent.com/122947570/236608840-ed7b2897-e88f-4d2e-a2c9-76b532e1c1b5.png"
  },
  {name: "Fulvous Whistling Duck",
  category: "Birds",
  image:
    "https://user-images.githubusercontent.com/122947570/236608839-6453c036-a0b0-42e3-ae14-10469ef964c3.png"
  },
  {name: "Masked Duck",
  category: "Birds",
  image:
    "https://user-images.githubusercontent.com/122947570/236608841-0161355f-6d11-45b3-a2c8-faf74fdb5f2b.png"
  },
  {name: "Plain Backed Antpitta",
  category: "Birds",
  image:
    "https://user-images.githubusercontent.com/122947570/236608842-fd1a42f0-f82f-4b3e-a5b8-6add9fd05d22.png"
  },
  {name: "Purple Martin",
  category: "Birds",
  image:
    "https://user-images.githubusercontent.com/122947570/236608843-9a8a572b-e24b-417e-89ea-b9c420bfdfa8.png"
  },
  {name: "Ruddy Duck",
  category: "Birds",
  image:
    "https://user-images.githubusercontent.com/122947570/236608845-04636881-a3d7-4b3b-956f-994e59f9028e.png"
  },
  {name: "Sand Martin",
  category: "Birds",
  image:
    "https://user-images.githubusercontent.com/122947570/236608846-9676a097-2c40-4980-8bd2-98d58f60b433.png"
  },
  {name: "Scrub Tanager",
  category: "Birds",
  image:
    "https://user-images.githubusercontent.com/122947570/236608848-cba41771-efc2-42ae-9cb3-c9aba7cd7253.png"
  },
  {name: "Undulated Antpitta",
  category: "Birds",
  image:
    "https://user-images.githubusercontent.com/122947570/236608850-568668d4-7aa7-4010-9464-329a00d95ccd.png"
  },

  // FISHES
  {name: "Astroblepus",
  category: "Fishes",
  image:
    "https://user-images.githubusercontent.com/122947570/236609197-7b000b02-759a-4e25-b62e-51c41a3f9726.png"
  },
  {name: "Astyanax  Microlepis",
  category: "Fishes",
  image:
    "https://user-images.githubusercontent.com/122947570/236609198-bafb6d80-f35b-4326-b16d-e9b32e5a7e38.png"
  },
  {name: "Bocachico",
  category: "Fishes",
  image:
    "https://user-images.githubusercontent.com/122947570/236609200-6610f00d-f716-4657-b978-5d3fe67bc67d.png"
  },
  {name: "Chaetostoma Fischeri",
  category: "Fishes",
  image:
    "https://user-images.githubusercontent.com/122947570/236609201-f050c0e5-27f5-4ab6-83af-d0033d773539.png"
  },
  {name: "La Carpa",
  category: "Fishes",
  image:
    "https://user-images.githubusercontent.com/122947570/236609203-f7abdb85-cda3-472e-928f-9575dee8b75c.png"
  },
  {name: "Microgenys Minuta",
  category: "Fishes",
  image:
    "https://user-images.githubusercontent.com/122947570/236609204-ef0cb331-39f4-45d7-ad0d-f9fc2d4b1274.png"
  },
  {name: "Oncorhynchus",
  category: "Fishes",
  image:
    "https://user-images.githubusercontent.com/122947570/236609205-8cffcfd3-5b44-43c2-a790-404eef1cbe13.png"
  },
  {name: "Parodon Caliensis Lectotype",
  category: "Fishes",
  image:
    "https://user-images.githubusercontent.com/122947570/236609206-10796cdf-b2e8-4db0-9f35-980a869afa7e.png"
  },
  {name: "Pimelodus Clarias",
  category: "Fishes",
  image:
    "https://user-images.githubusercontent.com/122947570/236609207-4ec19a6d-5c6b-4620-bee7-2b605e2a0511.png"
  },
  {name: "Pseudopimelodus Schultzi",
  category: "Fishes",
  image:
    "https://user-images.githubusercontent.com/122947570/236609209-902f670b-e494-4295-aa2e-cf11493d5b6d.png"
  },
  {name: "Tilapia",
  category: "Fishes",
  image:
    "https://user-images.githubusercontent.com/122947570/236609212-edd016d9-b595-4df1-ba77-ca19f69206bd.png"
  },
  ];

//---------- RENDER Elements TO PAGE
const container = document.querySelector(".container");

function renderDataToPage(results) {
  //iterate over data set
  for(let i = 0; i < results.length; i++){
    // create list item 
    let card = document.createElement('div');
    // add a class to each item of the results
    
    card.classList.add('card', results[i].category) //Fishes
    // add the data name
    let title = document.createElement('h4')
    title.textContent = results[i].name //Oncorhynchus 
    // add data category
    let category = document.createElement('p')
    category.classList.add(results[i].category)
    category.textContent = results[i].category
    // Add draggable attributes
    card.setAttribute('draggable', true);
    card.setAttribute('data-item', i);
    card_id = results[i].category+"_"+i.toString()
    card.setAttribute('id', card_id);
    // append fish image
    let image = document.createElement('img')
    image.setAttribute('src', results[i].image)

    container.appendChild(card)
    card.appendChild(title)
    card.appendChild(category)
    card.appendChild(image)
}
};
renderDataToPage(data);

//---------- FILTER elements BY category
let filterBtns = document.querySelector(".filters");
let cards = document.querySelectorAll(".card");

function filterFn(event) {
  console.log(event.target)  
  if(event.target.classList.contains('filter-btn')){
    // select the current active button
    let activeBtn = filterBtns.querySelector('.active')
    activeBtn.classList.remove('active')
    
    // apply the active class to the target
    event.target.classList.add('active')

    const filterValue = event.target.getAttribute('data-filter') // Fish

    for(let i = 0; i < cards.length; i++){
      if(cards[i].classList.contains(filterValue) || filterValue === 'all'){
        cards[i].classList.remove('hide')
        cards[i].classList.add('show')
      } else {
        cards[i].classList.remove('show')
        cards[i].classList.add('hide')
      }
    }
  }
}

filterBtns.addEventListener("click", filterFn);

// --------------------DRAG/DROP------------------------------------------


// Select the droppable area element
const plant_dropzone = document.querySelector('.plant-dropzone');
const fish_dropzone = document.querySelector('.fish-dropzone');

console.log("plant_dropzone: ")
console.log(plant_dropzone)

console.log("fish_dropzone: ")
console.log(fish_dropzone)

// Add a "draggable" attribute to each card element
cards.forEach(card => {
  card.setAttribute('draggable', 'true');
});

// Add an event listener to each card element for the "dragstart" event
cards.forEach(card => {
  card.addEventListener('dragstart', event => {
    // Set the "data" for the drag event to include the ID of the card element

    console.log("drag event:")
    console.log(event)
    event.dataTransfer.setData('text/plain', card.id);
    event.dataTransfer.effectAllowed = 'copy';
  });

});

plant_dropzone.addEventListener('dragover', event => {
  console.log(`dragover: effectAllowed = ${event.dataTransfer.effectAllowed}`);
  event.preventDefault();
  plant_dropzone.classList.add('highlight-plant');
});

plant_dropzone.addEventListener('dragleave', event => {
  plant_dropzone.classList.remove('highlight-plant');
});

plant_dropzone.addEventListener('drop', event => {
  console.log(`dragover: effectAllowed = ${event.dataTransfer.effectAllowed}`);
  event.preventDefault();
  plant_dropzone.classList.remove('highlight-plant');

  // Get the ID of the card element from the "data" of the drag event
  const id = event.dataTransfer.getData('text/plain');
  console.log("id")
  console.log(id)


  // Get the card element from its ID
  const card = document.getElementById(id);
  if (card.classList.contains("Plants") || card.classList.contains("Birds") ){
    const card_clone = card.cloneNode(true);
    const card_image = card_clone.childNodes[2]

    card_image.style.height = '110px'
    card_image.style.width = '110px'

    // Append the cloned element to the drop zone
    plant_dropzone.appendChild(card_image);

  }else{
    alert("Please insert only plants or birds above the bed zone!");
  }
  
});



fish_dropzone.addEventListener('dragover', event => {
  console.log(`dragover: effectAllowed = ${event.dataTransfer.effectAllowed}`);
  event.preventDefault();
  fish_dropzone.classList.add('highlight-fish');
  console.log(fish_dropzone.classList)
});

fish_dropzone.addEventListener('dragleave', event => {
  fish_dropzone.classList.remove('highlight-fish');
});

fish_dropzone.addEventListener('drop', event => {
  console.log(`dragover: effectAllowed = ${event.dataTransfer.effectAllowed}`);
  event.preventDefault();
  fish_dropzone.classList.remove('highlight-fish');

  // Get the ID of the card element from the "data" of the drag event
  const id = event.dataTransfer.getData('text/plain');
  console.log("id")
  console.log(id)


  // Get the card element from its ID
  const card = document.getElementById(id);
  if (card.classList.contains("Fishes")){
    const card_clone = card.cloneNode(true);
    const card_image = card_clone.childNodes[2]
  
    card_image.style.height = '40px'
    card_image.style.width = '80px'
  
    // Append the cloned element to the drop zone
    fish_dropzone.appendChild(card_image);
  }else{
    alert("Please insert only fishes below the bed zone!");
  }
  
  
});
