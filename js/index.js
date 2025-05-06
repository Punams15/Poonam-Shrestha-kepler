const body = document.querySelector("body"); 
const footerElement = document.createElement("footer"); 
body.appendChild(footerElement); 


let today = new Date(); 
let thisYear = today.getFullYear(); 


const copyright = document.createElement("p");
copyright.innerHTML = `\u00A9 Poonam Shrestha ${thisYear}`; 

let findFooter = document.querySelector("footer"); 
findFooter.appendChild(copyright); 


let skills = [
  "JavaScript",
  "HTML",
  "CSS",
  "GitHub",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe InDesign",
  "Linux",
];



const skillsSection = document.getElementById("skills"); 
const skillsList = skillsSection.querySelector("ul"); 

for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li"); 
  skill.innerText = skills[i]; 
  skillsList.appendChild(skill); 
}



