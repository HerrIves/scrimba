let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el");


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    console.log(myLeads);
    renderUl();
})

// 1. Create a variable, listItems, to hold all the HTML for the list items
let listItem = "";

function renderUl(){

for (let i = 0; i < myLeads.length; i++) {
// 2. Add the item to the listItems variable instead of the ulEl.innerHTML
    listItem += "<li>" + myLeads[i] + "</li>";
}
// 3. Render the listItems inside the unordered list using ulEl.innerHTML
    ulEl.innerHTML = listItem;
}