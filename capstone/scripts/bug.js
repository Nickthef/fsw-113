// Create a variable of the right kind and in the right place such that each new bug that is added can increment that number

class Bug {
    constructor(reportedBy, system, subSystem, bugDesc) {

        this.reportedBy = reportedBy;
        this.system = system;
        this.subSystem = subSystem;
        this.bugDesc = bugDesc;

        // This constructor should be set up to accept the four user-input values from index.html: 
        // reportedBy, system, subSystem, and bugDesc
    }

    addBug() {

        let listWrapper = document.getElementById("listWrapper");
        let bugInfo = document.createElement("div");
        listWrapper.append(bugInfo);

        let myP1 = document.createElement("p");
        myP1.textContent = `Reported By: ${this.reportedBy}`;

        let myP2 = document.createElement("p");
        myP2.textContent = `System: ${this.system} / ${this.subSystem}`;

        let myP3 = document.createElement("p");
        myP3.textContent = `Description: ${this.bugDesc}`;

        let btn1 = document.createElement("button");
        let btn2 = document.createElement("button");

        btn1.textContent = "Resolve";
        btn2.textContent = "Delete";

        btn1.addEventListener("click", this.resolveBug);
        btn2.addEventListener("click", this.deleteBug);

        bugInfo.append(myP1, myP2, myP3, btn1, btn2);

        // Create a div element that displays the bug information input by the user within the "listWrapper" DOM element. 
        // It should also contain buttons whose onClick events will call the deleteBug() and resolveBug() methods (see below). 

    }

    deleteBug(e) {
        e.target.parentNode.remove();
        // Create code that will remove the appropriate bug from the DOM. 
        // You may need to Google how to remove an element from the DOM.
    }

    resolveBug(e) { 
        e.target.parentNode.style.backgroundColor = "Grey";
        // Create code that changes the appropriate bug report to a darker color
    }
}

const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", reportBug);


function reportBug(e) {

    e.preventDefault();

    let reportedBy = document.getElementById("reportedBy");
    let system = document.getElementById("system");
    let subSystem = document.getElementById("subSystem");
    let bugDesc = document.getElementById("bugDesc");

    let bug = new Bug(reportedBy.value, system.options[system.selectedIndex].text, subSystem.options[subSystem.selectedIndex].text, bugDesc.value);
    

    console.log(system.options[system.selectedIndex].text)


    bug.addBug()
    // Create code that instantiates the Bug class with the data input by the 
    // user in the index.html form. Then call the method to add the new bug report.
}
