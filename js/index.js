//hamburger menu- on click of link, minimise overlay nav (small screen)
// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const navbarCollapse = document.getElementById("navbarNav");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      // Only collapse if it's open
      if (navbarCollapse.classList.contains("show")) {
        new bootstrap.Collapse(navbarCollapse).toggle();
      }
    });
  });
});

// ** PROJECTS SECTION **

//1)Creating your fetch

// Fetch your GitHub repositories (can be sorted repositories by name (alphabetically), creation date, update date, stars, etc.)
//when you use fetch() with just the URL (as shown below), it defaults to a "GET" request.//hint: the fetch function, hint: "GET" is the default method for fetch
fetch("https://api.github.com/users/Punams15/starred") //I only want starred repos. Not all repos (so used starred instead of repos)
  .then((response) => response.json()) // <-- THIS is the chain that returns JSON data// automatically parses JSON and returns a Promise// Convert response to JSON //Chain a then method to your fetch call and pass it a function that returns the response JSON data
  .then((data) => {
    //2)Handle your JSON data
    const repositories = data; // Store data in repositories variable //store parsed JSON in a variable//// JSON is already parsed here
    console.log(repositories); // View your repositories in the console // log repositories

    //Explanation:
    //The first .then(response => response.json()) parses the raw response.

    //The next .then() receives the parsed JSON data (data).//.then(response => {
    //const repositories = JSON.parse(this.response); // ❌ This is incorrect here})

    //You store that in repositories and log it to the console.

    //4)Display Repositories in List
    // Select the projects section and list
    const projectSection = document.getElementById("projects"); // Step 1: Select the projects section by id //The variable named projectSection that uses DOM selection by id //document.getElementById('projects') is the DOM selection method that selects the element with the id "projects".
    const projectList = projectSection.querySelector("ul"); // Step 2: Select the list inside the projectSection//The variable named projectList that uses DOM selection on projectSection

    // Clear the list if it already exists (optional)
    projectList.innerHTML = ""; // Step 5: Set inner text to repository name//example:project.innerText = repositories[i].name;

    //Sort by name (A-Z)
    repositories.sort((a, b) => a.name.localeCompare(b.name));

    if (repositories.length === 0) {
      projectList.innerHTML = "<li>No repositories found.</li>"; //if-condition, not a loop. It just checks if the array is empty and handles that case.
      return;
    }

    for (let i = 0; i < repositories.length; i++) {
      // Step 3: Loop through repositories array // loop that iterates over the repositories array.// loop that iterates over your repositories array, starting at index 0:
      // create list items as usual
    }

    repositories.forEach((repo) => {
      const project = document.createElement("li"); //// Step 4: Create a new list item element//Inside the loop,, create a variable named project to make a new list item (li) element,hint: createElement method
      /*project.innerText = repo.name;*/
      /* projectList.appendChild(project);*/

      /*// Loop over repositories and create list items
    for (let i = 0; i < repositories.length; i++) {
      const project = document.createElement('li');
      project.innerText = repositories[i].name;
      projectList.appendChild(project);
    }
  })*/

      // Create anchor
      const link = document.createElement("a");
      link.href = repo.html_url;
      link.innerText = repo.name;
      link.target = "_blank"; // Open in new tab
      link.rel = "noopener noreferrer"; // Security best practice

      // Append link to li
      project.appendChild(link); //append the project element to the projectList element,hint: appendChild method
      projectList.appendChild(project); // Step 6: Append the new list item to the projectList
    });
  })
  //3)Handling errors
  // Chain a catch() function to your fetch call to handle errors from the server so the user would know what happened if your Projects section was empty.
  .catch((error) => {
    console.error("Error fetching repositories:", error);
    const projectSection = document.getElementById("projects");
    const projectList = projectSection.querySelector("ul");
    projectList.innerHTML =
      "<li>Unable to load projects. Please try again later.</li>";
  });

//Save and refresh your browser (or just check your browser for changes if using live extension)
//You should see your list of repositories beneath the "Projects" heading on your portfolio site

//for (let i = 0; i < repositories.length; i++) {
// Inside this block, you can access each repository like this:
//const repo = repositories[i];

// Example: Log the name of each repository
//console.log(repo.name);}

//for (let i = 0; i < repositories.length; i++) {
//const project = document.createElement('li'); // create list item

//project.innerText = repositories[i].name; // ✅ set inner text using bracket notation

//projectList.appendChild(project); // add it to the list}

//Style your Repository List in your CSS file .STRETCH GOAL: Use flexbox (or grid) to style your list of repositories

//By the end of this assignment, you should have a working API fetch to your GitHub account and be able to see a list of your repository names in the Projects section of your portfolio.  Were there to be a server error during the API fetch, your site would return an error message.  Your project list should be styled using flexbos or grid.

// ** SKILLS SECTION **

//MY SKILLS STORED IN AN ARRAY
let skills = [
  "JavaScript",
  "HTML",
  "CSS",
  "Bootstrap ",
  "GitHub",
  "Responsive Design",
  "DOM",
  "Grid",
  "Flexbox",
  "Visual Studio Code",
  "Linux",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe InDesign",
];

//VARIABLES CREATED FOR THE SKILLS ELEMENT AND THE UL ELEMENT
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

//SKILLS ARRAY LOOP TO CREATE LI ELEMENTS
for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li"); // Creating an li element
  skill.innerText = skills[i]; // Each skill is added to the li element
  skillsList.appendChild(skill); // Appending the li to the ul and displaying in browser
}

// ** MESSAGE SECTION **
const messageForm = document.forms["leave_message"]; //CTD: "DOM Selection" to select the "leave_message" form by name attribute

messageForm.addEventListener("submit", (event) => {
  event.preventDefault(); //1*) PREVENTS REFRESH / AUTO-RELOAD (JS CODE TO HANDLE FORM SUBMIT USING THE EVENT LISTENER'S CALLBACK FUNCTION)

  //2*) GET FORM VALUES (USER'S NAME, EMAIL,PHONE NUMBER AND MESSAGE VALUES)  //CTD:Add an event listener to the messageForm element that handles the "submit" event> hint**: addEventListener method
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersPhoneNumber = event.target.usersPhoneNumber.value;
  const usersMessage = event.target.usersMessage.value; //hint**: event.target is the form, event.target.usersName is the first input element

  console.log(usersName, usersEmail, usersPhoneNumber, usersMessage); //CTD:add a console.log statement to log the three variables created

  //3*) SELECT THE UL OF MESSAGE SECTION AND DISPLAY MESSAGES
  const messageSection = document.getElementById("messages"); //CTD:Create a variable named messageSection and use "DOM Selection" to select the #messages section by id
  const messageList = messageSection.querySelector("ul"); //Create a variable named messageList and use "DOM Selection" to query the messageSection (instead of the entire document) to find the <ul> element

  messageList.classList.add("messages-ul");

  //4*) CREATE NEW LI ELEMENT FOR THE USER'S MESSAGE
  const newMessage = document.createElement("li"); //Create a variable named newMessage that makes a new list item (li) element
  newMessage.classList.add("user-msg-li"); //CTD:On the next line, set the inner HTML of your newMessage element

  //<a> element that displays the "usersName" and is a clickable link to the "usersEmail" (hint: use the mailto: prefix)
  newMessage.innerHTML = `
    <a class="user-email" href="mailto:${usersEmail}"> <i class="fa-solid fa-envelope"></i>   ${usersName}</a>
    ${
      usersPhoneNumber
        ? `<span class="phone-number"><i class="fa-solid fa-phone"></i>  ${usersPhoneNumber})</span>`
        : ""
    }
    <span class="user-msg">${usersMessage}</span>     
  `; //<span> element that displays the "usersMessage"

  // Create Edit Button TO MODIFY MESSAGE CONTENT
  const editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.type = "button";
  editButton.classList.add("edit-btn");

  //5*) Create Remove Button    //CTD:Create a variable named removeButton that makes a new <button> element
  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove"; //CTD:Set the inner text to "remove"
  removeButton.type = "button"; // or removeButton.setAttribute("type", "button");  //CTD:Set the type attribute to "button"
  removeButton.classList.add("remove-btn");

  //6*) APPEND THE REMOVE BUTTON TO THE MESSAGE LI
  // --- Wrap Buttons in Container --- ( /* To stack edit and remove button side by side */)
  //-- Buttons Container
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("message-actions");

  buttonContainer.appendChild(editButton);
  buttonContainer.appendChild(removeButton); //CTD:Append the removeButton to the newMessage element.hint*: appendChild method//Remove the entry element from the DOM (hint: remove method)
  newMessage.appendChild(buttonContainer); // --- Add Buttons Container to Message ---//Append the newMessage to the messageList element

  //Edit Button Functionality (Textarea Editing)
  // --- Select the message-text span inside this newMessage <li> (Inline Edit Functionality added) ---
  editButton.addEventListener("click", () => {
    const messageText = newMessage.querySelector(".user-msg");
    if (messageText) {
      editButton.style.display = "none"; // Hide Edit button while editing

      // Create textarea input field pre-filled with current message (full box)
      const textarea = document.createElement("textarea");
      textarea.value = messageText.textContent;
      textarea.classList.add("edit-textarea");
      textarea.rows = 4;
      textarea.style.width = "100%";

      // Create Save Button
      const saveButton = document.createElement("button");
      saveButton.innerText = "Save";
      saveButton.type = "button";
      saveButton.classList.add("save-btn");

      // Replace message text with textarea
      messageText.replaceWith(textarea);

      // Insert Save button before Remove button
      buttonContainer.insertBefore(saveButton, removeButton);

      // Save changes on clicking Save
      saveButton.addEventListener("click", () => {
        const newContent = textarea.value.trim();
        if (newContent !== "") {
          const updatedMessage = document.createElement("span");
          updatedMessage.classList.add("user-msg");
          updatedMessage.textContent = newContent;

          textarea.replaceWith(updatedMessage);
          saveButton.remove();
          editButton.style.display = "inline-block"; // // Show Edit box again instead of just prompt() the user to edit if needed
        }
      });
    }
  });
  //CTD:Inside the callback function, create a variable named entry that finds the button's parent element using DOM Traversal (hint: parentNode property)
  //7*) Remove the message (entry) after clicking on the remove button //CTD:Add an event listener to the removeButton element that handles the "click" event
  // Remove Button Functionality  //CTD:Remove the entry element from the DOM (hint: remove method)
  removeButton.addEventListener("click", () => {
    const entry = removeButton.closest("li"); // 🔥 Correctly finds the <li> parent //---used closet("li") instead of parentNode to stack edit and remove button side by side
    entry.remove();
    //8*) If no <li> elements remain within the <ul> element, the messageSection with the header "Messages"  will remain hidden
    // AUTO-HIDE #MESSAGES IF LIST IS EMPTY
    if (messageList.children.length === 0) {
      messageSection.style.display = "none";
      messageSection.classList.add("hidden");
    }
  });

  // Add message to list & show section
  messageList.appendChild(newMessage); // --- Add Message to the List ---
  messageSection.style.display = "block"; // Show the messages section

  //9*) Reset form after submit
  messageForm.reset();
});

//summary of message form section:

//1) Submit a message
//2)It shows up in a list
//3) messages can be removed
//4)messages can be edited
//5)The messages section hides when empty

// ** FOOTER SECTION **

// APPENDING THE FOOTER ElEMENT TO BODY
const body = document.querySelector("body");
const footerElement = document.createElement("footer");
body.appendChild(footerElement);

// THE YEAR WILL UPDATE DYNAMICALLY EVERY YEAR  BY CREATING A YEAR VARIABLE
let today = new Date();
let thisYear = today.getFullYear();

// TO DISPLAY COPYRIGHT UNICODE WITH MY NAME AND CURRENT YEAR IN THE BROWSER AND THE COPYRIGHT P ELEMENT TO THE FOOTER
const copyright = document.createElement("p");
//copyright.innerHTML = `\u00A9 Poonam Shrestha ${thisYear}`;
copyright.innerHTML = `\u00A9  ${thisYear} Poonam Shrestha.All rights reserved.`;
//FINALLY APPENDING COPYRIGHT
let findFooter = document.querySelector("footer");
findFooter.appendChild(copyright);
