//Nathan Voung
//nvoung@iastate.edu
//September 25th, 2024



function appendData(data) {
    let mainContainer = document.getElementById("myData1");
    for(let person of data){
        let div = document.createElement("div");
        div.classList.add("col-sm-6", "col-md-4", "col-lg-3");
        div.innerHTML = `
        <div class="card mb-4" style="width: 100%;">
            <img src=${person.logo} class="card-img-top" alt="superhero" width="100" />
            <div class="card-body">
                <h5 class="card-title">${person.firstName} ${person.lastName}</h5>
                <p class="card-text">
                    <strong>Job:</strong> ${person.job} <br>
                    <strong>Roll:</strong> ${person.roll}
                </p>
            </div>
        </div>
        `;
        mainContainer.appendChild(div);
    }
}

function fetchData() {
    console.log("Begin Fetch");
    fetch("./persons.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            appendData(data);
        })
        .catch(function (error) {
            console.log("Error" + error);
        });
    console.log("End Fetch");
}

fetchData();

