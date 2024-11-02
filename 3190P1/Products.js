
function fetchData(category) {
    fetch("../data.json")
        .then(response => response.json())
        .then(data => {
            if (category === "rods") {
                loadItems(data.rods);
            } else if (category === "lures") {
                loadItems(data.lures);
            }else if(category === "boats"){
                loadItems(data.boats);
            }
            else if(category === "jetski"){
                loadItems(data.jetski);
            }       
        })
        .catch(err => console.log("Error: " + err));
}

function loadItems(items) {
    var CardContainer = document.getElementById("col");
    // Clear previous data
    CardContainer.innerHTML = "";

    for (var i = 0; i < items.length; i++) {
        let name = items[i].name;
        let url = items[i].url;
        let price = items[i].price;
        let infoURL = items[i].infoURL;

        let AddCardItem = document.createElement("div");
        AddCardItem.classList.add("col"); // Add Bootstrap class to the column

        AddCardItem.innerHTML = `
            <a href="${infoURL}">
                <div class="card h-100 shadow-sm d-flex flex-column">
                    <img src=${url} class="card-img-top fixed-image" alt="${name}"/>
                    <div class="card-body d-flex flex-column justify-content-between">
                        <p class="card-text"><strong>${name}</strong></p>
                        <p class="card-text"><strong>Price:</strong> $${price}</p>
                    </div>
                </div>
            </a>
        `;

        CardContainer.appendChild(AddCardItem);
    }
}

// function loadDescriptions(description){
//     var CardContainer = document.getElementById("col");
//     // Clear previous data
//     CardContainer.innerHTML = "";

//     for (var i = 0; i < items.length; i++) {
//         let horsepower = items[i].horsepower;
//         let length = items[i].length;
//         let seatingCapacity = items[i].seatingCapacity;
//         let fuelCapacity = items[i].fuelCapacity;

//         let AddCardItem = document.createElement("div");
//         AddCardItem.classList.add("col"); // Add Bootstrap class to the column

//         AddCardItem.innerHTML = `
//             <a href="${infoURL}">
//                 <div class="card shadow-sm">
//                     <img src=${url} class="card-img-top" alt="..."></img>
//                     <div class="card-body">
//                         <p class="card-text"><strong>${name}</strong></p>
//                         <p class="card-text"><strong>Price:</strong> $${price}</p>
//                     </div>
//                 </div>
//             </a>
//         `;

//         CardContainer.appendChild(AddCardItem);
//     }
// }
