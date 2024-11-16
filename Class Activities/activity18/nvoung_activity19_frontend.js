function fetchData() {
  // Read the DB with robots:
  fetch("http://localhost:8081/listRobots")
    .then((response) => response.json())
    .then((myRobots) => {
      console.log(myRobots);
      loadRobots(myRobots);
    })
    .catch((err) => console.log("error:" + err));
}

fetchData();

function loadRobots(myRobots) {
  console.log(myRobots);
  var CardRobot = document.getElementById("col");
  for (var i = 0; i < myRobots.length; i++) {
    let name = myRobots[i].name;
    let price = myRobots[i].price;
    let description = myRobots[i].description;
    let url = myRobots[i].imageUrl;
    let AddCardRobot = document.createElement("div");
    AddCardRobot.classList.add("col"); // Add Bootstrap class to the column
    AddCardRobot.innerHTML = `
      <div class="card shadow-sm">
        <img src=${url} class="card-img-top" alt="${name}"></img>
        <div class="card-body">
          <p class="card-text"><strong>${name}</strong></p>
          <p class="card-text">Price: $${price}</p>
          <p class="card-text">${description}</p>
        </div>
      </div>
      `;
    CardRobot.appendChild(AddCardRobot);
  } // end of for
} // end of function

function showOneRobot() {
  let id = document.getElementById("robotId").value;
  fetch(`http://localhost:8081/${id}`)
  .then(response => {
      if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
  })
  .then(myFavoriteRobot => loadOneRobot(myFavoriteRobot))
  .catch(err => console.error("Error fetching robot:", err));
}

function loadOneRobot(myFavoriteRobot) {
  console.log(myFavoriteRobot);

  var CardRobot = document.getElementById("col"); // The container where the card will be added
  CardRobot.innerHTML = ""; // Clear any previous content

  let name = myFavoriteRobot.name;
  let price = myFavoriteRobot.price;
  let description = myFavoriteRobot.description;
  let url = myFavoriteRobot.imageUrl || "path/to/default-image.jpg"; // Use a default image if the URL is missing

  let AddCardRobot = document.createElement("div");
  AddCardRobot.classList.add("col"); // Add Bootstrap column class
  AddCardRobot.innerHTML = `
    <div class="card shadow-sm">
      <img src="${url}" class="card-img-top" alt="${name}">
      <div class="card-body">
        <p class="card-text"><strong>${name}</strong></p>
        <p class="card-text">Price: $${price}</p>
        <p class="card-text">${description}</p>
      </div>
    </div>
  `;

  CardRobot.appendChild(AddCardRobot); // Append the card to the container
}

function deleteOneRobot() {
  // Fetch the value from the input field
  let id = document.getElementById("deleteId").value;
  console.log(id);
  fetch(`http://localhost:8081/robot/${id}`, {
  method: 'DELETE',
  headers: {'Content-Type': 'application/json' },
  body: JSON.stringify(
  { "id":id}
  )
  })
  .then(response => response.json())
  .then(deleteThisRobot => {displayCRUDRobot(deleteThisRobot,"col4","Robot Deleted");
  });
  }

  function addRobot() {
    // Create a new robot object
    const newRobot = {
      id: 4,
      name: "nathan voung",
      price: 87.5,
      description: "nathan as a robot",
      imageUrl: "https://robohash.org/nathanvoung"
    };
    
    console.log(newRobot);
  
    fetch(`http://localhost:8081/robot`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newRobot)
    })
    .then(response => response.json())
    .then(addedRobot => {
      displayCRUDRobot(addedRobot, "col3", "Robot Added");
    })
    .catch(error => {
      alert("Error adding robot: " + error.message);
    });
  }

  function updateOneRobot() {
    // Fetch the value from the input field
    let id = document.getElementById("updateId").value;
    console.log(id);
    fetch(`http://localhost:8081/robot/${id}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json' },
    body: JSON.stringify(
    {
    "name": "Robot Abraham ALDACO-GASTELUM",
    "price": 100.90,
    "description": "I robot is one example of an image for my exercise",
    "imageUrl": "https://robohash.org/Abraham"
    }
    )
    })
    .then(response => response.json())
    .then(updateThisRobot => {displayCRUDRobot(updateThisRobot,"col5","Robot Updated");});
    }
  