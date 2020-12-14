let villagersGridElement = document.getElementById(villagersGrid);

let outputElement = document.getElementById('outputElement');
let outputParagraph = document.getElementById('outputParagraph');
// let contentGridElement = document.getElementById('contentGrid');


let jsonDatabase = [
  {
    "icon" : "https://dodo.ac/np/images/3/3d/Annalisa_NH_Villager_Icon.png",
    "name" : "Annalisa",
    "birthday" : "Birthday: February 6",
    "personality" : "Personality: Normal",
    "favcolors" : "Favorite Colors: Red and Pink",
    "aesthetic" : "Aesthetic: Elegant and Gorgeous",
    "gotoOutfit" : "https://dodo.ac/np/images/b/b6/Annalisa_NH_2.png"
  },
  {
    "icon" : "https://dodo.ac/np/images/3/34/Antonio_NH_Villager_Icon.png",
    "name" : "Antonio",
    "birthday" : "Birthday: October 20",
    "personality" : "Personality: Jock",
    "favcolors" : "Favorite Colors: Aqua and Blue",
    "aesthetic" : "Aesthetic: Simple",
    "gotoOutfit" : "https://dodo.ac/np/images/d/d4/Antonio_NH.png"
  },
  {
    "icon" : "https://dodo.ac/np/images/2/2a/Astrid_NH_Villager_Icon.png",
    "name" : "Astrid",
    "birthday" : "Birthday: September 8",
    "personality" : "Personality: Snooty",
    "favcolors" : "Favorite Colors: Black and Colorful",
    "aesthetic" : "Aesthetic: Cool and Active",
    "gotoOutfit" : "https://dodo.ac/np/images/thumb/d/d5/Astrid_NH.png/708px-Astrid_NH.png"
  },
  {
    "icon" : "https://dodo.ac/np/images/9/9b/Bruce_NH_Villager_Icon.png",
    "name" : "Bruce",
    "birthday" : "Birthday: May 26",
    "personality" : "Personality: Cranky",
    "favcolors" : "Favorite Colors: Black and Red",
    "aesthetic" : "Aesthetic: Cool and Simple",
    "gotoOutfit" : "https://dodo.ac/np/images/2/21/Bruce_NH_2.png"
  },
  {
    "icon" : "https://dodo.ac/np/images/c/c5/Colton_NH_Villager_Icon.png",
    "name" : "Colton",
    "birthday" : "Birthday: May 22",
    "personality" : "Personality: Smug",
    "favcolors" : "Favorite Colors: Blue and Red",
    "aesthetic" : "Aesthetic: Gorgeous and Elegant",
    "gotoOutfit" : "https://dodo.ac/np/images/f/f3/Colton_NH_2.png"
  },
  {
    "icon" : "https://dodo.ac/np/images/8/8a/Cranston_NH_Villager_Icon.png",
    "name" : "Cranston",
    "birthday" : "Birthday: September 23",
    "personality" : "Personality: Lazy",
    "favcolors" : "Favorite Colors: Beige and Brown",
    "aesthetic" : "Aesthetic: Simple and Cool",
    "gotoOutfit" : "https://dodo.ac/np/images/2/20/Cranston_NH_2.png"
  },
  {
    "icon" : "https://dodo.ac/np/images/6/6b/Pashmina_NH_Villager_Icon.png",
    "name" : "Pashmina",
    "birthday" : "Birthday: December 26",
    "personality" : "Personality: Sisterly (Uchi)",
    "favcolors" : "Favorite Colors: Red and Colorful",
    "aesthetic" : "Aesthetic: Cool and Elegant",
    "gotoOutfit" : "https://static.wikia.nocookie.net/animalcrossing/images/3/3e/Pashmina_NH.png/revision/latest/scale-to-width-down/658?cb=20200802145815"
  },
  {
    "icon" : "https://dodo.ac/np/images/f/f9/Roscoe_NH_Villager_Icon.png",
    "name" : "Roscoe",
    "birthday" : "Birthday: June 16",
    "personality" : "Personality: Cranky",
    "favcolors" : "Favorite Colors: Black and Gray",
    "aesthetic" : "Aesthetic: Cool and Gorgeous",
    "gotoOutfit" : "https://dodo.ac/np/images/e/e7/Roscoe_NH_2.png"
  },
  {
    "icon" : "https://dodo.ac/np/images/c/c0/Wendy_NH_Villager_Icon.png",
    "name" : "Wendy",
    "birthday" : "Birthday: August 15",
    "personality" : "Personality: Peppy",
    "favcolors" : "Favorite Colors: Red and Green",
    "aesthetic" : "Aesthetic: Cool and Gorgeous",
    "gotoOutfit" : "https://dodo.ac/np/images/9/94/Wendy_NH_2.png"
  },
  {
    "icon" : "https://dodo.ac/np/images/a/a9/Whitney_NH_Villager_Icon.png",
    "name" : "Whitney",
    "birthday" : "Birthday: September 17",
    "personality" : "Personality: Snooty",
    "favcolors" : "Favorite Colors: Blue and Aqua",
    "aesthetic" : "Aesthetic: Elegant Cool",
    "gotoOutfit" : "https://dodo.ac/np/images/6/69/Whitney_NH_2.png"
  }
];



for (var i = 0; i < jsonDatabase.length; i++) {
  createElement(jsonDatabase[i]);
}


// function printToPage(incoming) {
//   outputParagraph.innerHTML = incoming;
// }


// some stuff i dont get

function createElement(incomingJSON) {

  /// Create whole content item div and set class
  let newContentElement = document.createElement("DIV");
  // newContentElement.style.backgroundColor = #fdfdee;
  newContentElement.classList.add('contentItem');

  /// add icon
  let newContentImage = document.createElement("IMG");
  newContentImage.classList.add("contentImage");
  newContentImage.src = incomingJSON['icon'];
  newContentElement.appendChild(newContentImage);

  ///add name
  let newContentName = document.createElement("H2");
  newContentName.classList.add("contentName");
  newContentName.innerText = incomingJSON['name'];
  newContentElement.appendChild(newContentName);

  ///add birthday
  let newContentBday = document.createElement("P");
  newContentBday.classList.add("contentTXT");
  newContentBday.innerText = incomingJSON['birthday'];
  newContentElement.appendChild(newContentBday);

  ///add personality
  let newContentPersonality = document.createElement("P");
  newContentPersonality.classList.add("contentTXT");
  newContentPersonality.innerText = incomingJSON['personality'];
  newContentElement.appendChild(newContentPersonality);

  ///add favcolors
  let newContentColors = document.createElement("P");
  newContentColors.classList.add("contentTXT");
  newContentColors.innerText = incomingJSON['favcolors'];
  newContentElement.appendChild(newContentColors);

  ///add aesthetic
  let newContentAesthetic = document.createElement("P");
  newContentAesthetic.classList.add("contentTXT");
  newContentAesthetic.innerText = incomingJSON['aesthetic'];
  newContentElement.appendChild(newContentAesthetic);

  ///add gotoOutfit
  let newContentOutfit = document.createElement("IMG");
  newContentOutfit.classList.add("contentOutfit");
  newContentOutfit.src = incomingJSON['gotoOutfit'];
  newContentElement.appendChild(newContentOutfit);

  /// Add the item to the page
  villagersGrid.appendChild(newContentElement);

}
