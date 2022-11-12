// selecting elements

const container = document.querySelector(".container")
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const yearInput = document.querySelector("#year");
const inputForm = document.querySelector("form");
const tinputButton = document.querySelector("#button");
const tableBody = document.querySelector("#tableBody");






const makeElement = () =>{
    const titleValue = titleInput.value;
    const authorValue = authorInput.value;
    const yearValue = yearInput.value;
    
    const newTrRow = document.createElement("tr");
    tableBody.appendChild(newTrRow);
    // new title value make

    const NewTitle = document.createElement("th");
    NewTitle.innerHTML = titleValue;
    newTrRow.appendChild(NewTitle);

    // new author value make

    const NewAuthor = document.createElement("th");
    NewAuthor.innerHTML = authorValue;
    newTrRow.appendChild(NewAuthor);

    // new title vvalue make

    const NewYear = document.createElement("th");
    NewYear.innerHTML = yearValue;
    newTrRow.appendChild(NewYear);
    

};

// collect value function

const collectValue = (e) =>{
    e.preventDefault();
    // another function
    makeElement();

};


// add event listener 
inputForm.addEventListener("submit",collectValue);
