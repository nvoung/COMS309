//Nathan Voung
//nvoung@iastate.edu
//September 25th, 2024

const b = document.getElementById("my_form");

b.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from submitting in the traditional way
    console.log("Form submitted");
    fetchData();
});

function LoadMovies(data) {
    console.log("LoadMovies function called");
    if (!data || !data.length) {
        console.error("Invalid data format or empty data");
        return;
    }

    var CardMovie = document.getElementById("col");
    const inputMovieName = document.getElementById("selectedMovie").value;
    CardMovie.innerHTML = ''; // Clear previous results

    for (let i = 0; i < data.length; i++) {
        if (data[i].title === inputMovieName) {
            let title = data[i].title;
            let year = data[i].year;
            let url = data[i].url;
            console.log(`Title: ${title}, Year: ${year}, URL: ${url}`);
            let AddCardMovie = document.createElement("div");
            AddCardMovie.classList.add("col");
            AddCardMovie.innerHTML = `
<div class="card shadow-sm">
<img src=${url} class="card-img-top" alt="..."></img>
<div class="card-body">
<p class="card-text"> <strong>${title}</strong>, ${year}</p>
</div>
</div>
`;
            CardMovie.appendChild(AddCardMovie);
        }
    }
}

function fetchData() {
    console.log("Begin Fetch");
    fetch("./MoviesFromJSON.json")
        .then(response => {
            console.log("Fetch response received");
            return response.json();
        })
        .then(data => {
            console.log("Data fetched successfully");
            console.log(data);
            if (data && data.movies) {
                LoadMovies(data.movies);
            } else {
                console.error("Invalid JSON structure");
            }
        })
        .catch(error => {
            console.log("Error: " + error);
        });
    console.log("End Fetch");
}

fetchData();
