//Nathan Voung
//nvoung@iastate.edu
//sep 20, 2024

console.log("Exercise 1");
console.log("----------------------");

function maxOfTwo(n1, n2) {
    let max = n1;
    if (n2 > max)
        max = n2;
    return max;
}

let n1 = 11;
let n2 = 10;
console.log(`The max between ${n1} and ${n2} is :`, maxOfTwo(n1, n2));

console.log("Exercise 2");
console.log("----------------------");

function maxOfArray(array) {
    let max = array[0];
    for (let value of array)
        if (value > max)
            max = value;

    return max;
}


let array = [10, 11, 1024, 125, 9, 201];
console.log(maxOfArray(array));

console.log("Exercise 3");
console.log("----------------------");

function showProperties(movie) {
    //  console.log(Object.keys(movie));
    //  console.log(Object.values(movie));
    console.log("Here is the list of KEYS")
    for (let mykey in movie) {
        console.log(mykey);
    }
    console.log("Here is the list of VALUES")
    for (let mykey in movie) {
        console.log(movie[mykey]);
    }
}

const movie = {
    title: 'Some movie',
    releaseYear: 2018,
    rating: 4.5,
    director: 'Steven Spielberg'
};
showProperties(movie);

console.log("Exercise 4");
console.log("----------------------");

const circle = {
    radius: 2,
    area: function () {
        return Math.PI * this.radius * this.radius;
    }
};

console.log(`The area of the circle is : ${circle.area().toFixed(2)}`);

console.log("Exercise 8");
console.log("----------------------");

const students = [
    {
        Fer: {
            math: 85,
            science: 90,
            history: 75,
            literature: 88
        }
    },
    {
        Alex: {
            math: 99,
            science: 97,
            history: 94,
            literature: 90
        }
    },
    {
        Mary: {
            math: 79,
            science: 72,
            history: 81,
            literature: 79
        }
    }
];

const grades = {
    math: 85,
    science: 90,
    history: 75,
    literature: 88
};

function calculateAverageGrade(grades) {
    for (let student of students)
        console.log(student)
    const keys = Object.keys(students);
}

console.log(calculateAverageGrade(grades));