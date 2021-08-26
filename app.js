
document.getElementById("refresh").addEventListener("click", fetchContacts);

// link to the add contact page
document.getElementById("addContacts").addEventListener("click", () => {window.open("add-contact.html", "_self")});

function fetchContacts(){ //fetch contacts from the sever
    fetch(rootPath + "controller/get-contacts/")
    .then( (response) =>{
        return response.json();
    })
    .then((data) =>{
        displayOutput(data); // call the display function
    })
}

// contruct the output
function displayOutput(data){
    output = "";

    // display contacts one by one in a table format
    for(i in data){
        output += `
                    <div class="card" onclick="aditContact(${data[i].id})">
                     <img src="${rootPath}controller/uploads/${data[i].avatar}"/>
                     <div class="card-info">
                       <h2>${data[i].firstname} ${data[i].lastname}</h2>
                       <p>${data[i].mobile}</p>
                     </div>
                   </div>
                  `
    }
    document.getElementById("show").innerHTML = output;
}

// call the adit contact page
function aditContact(id){
    window.open("adit-contact.html?id=" + id, "_self");
}

// link to the home page
function homeLink(){
    window.open("index.html", "_self");
}

