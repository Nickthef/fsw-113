// declare any necessary variables

// define a function called 'fetchData()' that passes the values from 
// the 'queryType' and 'itemID' elements in starwars.html to the function 
// called 'getFromSWAPI()'

function getFromSWAPI(queryType, itemID) {
    // assign values to any necessary variables
    fetch(`https://swapi.dev/api/${queryType}/${itemID}`)
    .then(function (response) {
        return response.json()
    })
    .then(function(data){
        updateInfo(data)
    })
    .catch(function(err) {
        console.warn(err)
    })
}

function fetchData() {
    let queryType = document.getElementById("queryType").value;
    let itemID = document.getElementById("itemID").value;

    getFromSWAPI(queryType, itemID);
}

function updateInfo(data) {

    console.log(data);

    let dataLabel1 = document.getElementById("dataLabel1");
    let dataValue1 = document.getElementById("dataValue1");
    let dataLabel2 = document.getElementById("dataLabel2");
    let dataValue2 = document.getElementById("dataValue2");

    dataLabel1.textContent = "name";
    dataValue1.textContent = data.name;

    let queryType = document.getElementById("queryType").value;

    if (queryType === "people") {
        dataLabel2.textContent = "eye color";
        dataValue2.textContent = data.eye_color;
    } else if (queryType === "planets") {
        dataLabel2.textContent = "Gravity";
        dataValue2.textContent = data.gravity;
    } else {
        dataLabel2.textContent = "length";
        dataValue2.textContent = data.length;
    }

}



// create a new function called 'updateInfo()' that receives the data from 
// the call to that function (see above). Use logic to write the appropriate
//labels to 'dataLabel1' and 'dataLabel2' elements in starwars.html, as well
// as the appropriate values from the data object to the 'dataValue1' and 
// 'dataValue2' elements in starwars.html.