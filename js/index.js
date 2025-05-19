// ** SKILLS SECTION **

//MY SKILLS STORED IN AN ARRAY
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
copyright.innerHTML = `\u00A9 Poonam Shrestha ${thisYear}`;

//FINALLY APPENDING COPYRIGHT
let findFooter = document.querySelector("footer");
findFooter.appendChild(copyright);
