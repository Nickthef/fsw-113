// Create an event listener for the 'submit' button that calls the combineLists() function

// Modify the combineLists() function to create arrays from each scavenger hunt element in the scavenger.html document.
// Then use the spread operator to combine these arrays into a single array.
// Sort that array and display it in the 'AllItems' element on the scavenger.html document.

document.getElementById("submit").addEventListener("click", combineLists);

function combineLists() { 
    // Create arrays from each scavenger hunt element in scavenger.html
    let rajiArr = document.getElementById("scavenger-0").value.split(",");
    let huangArr = document.getElementById("scavenger-1").value.split(",");
    let joseArr = document.getElementById("scavenger-2").value.split(",");
    let veronicaArr = document.getElementById("scavenger-3").value.split(",");

    // Combine arrays into a single array and sort it.
    let combinedArr = [...rajiArr, ...huangArr, ...joseArr, ...veronicaArr].sort();
     
    // Display combined array on the DOM.
    let AllItems = document.getElementById("AllItems");
    AllItems.innerText = combinedArr.join(","); 
    
}

// The following code is a bonus addition that facilitates data entry on the scavenger.html document.
// If you first click in one of the textareas, you can then click scavenger hunt items in the unordered
// list. The value of that will be added to the appropriate textarea along with any necessary commas.

let objTargetText;
const objUL = document.querySelector("#lstItems");

objUL.onclick = function (event) {
  var source = getEventTarget(event);
  if (!objTargetText.innerHTML) objTargetText.innerHTML = source.innerHTML;
  else objTargetText.innerHTML += "," + source.innerHTML;
};

function getEventTarget(e) {
  e = e || window.event;
  return e.target || e.srcElement;
}

function setTarget(obj) {
  objTargetText = obj;
}
