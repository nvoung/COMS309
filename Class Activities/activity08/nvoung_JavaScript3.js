
const rectangle = {
    type: "rectangle",
    width: 5,
    height: 10,
    areaR: function(){
        return (this.width * this.height).toFixed(2);
    },
    
    getterR: function(){
        console.log(`Width: ${this.width} Height: ${this.height}`);
    },

    setterR: function(w, h){
        this.width = w;
        this.height = h;
    },
    };
    // Define an object representing a circle
    const circle = {
    type: "circle",
    radius: 7,
    areaC: function () {
        return (Math.PI * this.radius * this.radius).toFixed(2);
    }, 

    getterC: function(){
        console.log(`Radius: ${this.radius}`);
    },

    setterC: function(r){
        this.radius = r;
    },

    };

    console.log("Input Data >")
    const w = prompt("Enter Width: ")
    const h = prompt("Enter Height: ")
    console.log("Set Values >");
    rectangle.setterR(w,h);

    console.log("Get Values >");
    rectangle.getterR();
    const area = rectangle.areaR();
    console.log("Show Output >")
    console.log(`The area of the rectangle is ${area} with width ${w} and height ${h} `);

    console.log("-----------------------------------------------------------------------------");

    console.log("Input Data >")
    const r = prompt("Enter Radius: ")
    console.log("Set Values >");
    circle.setterC(r);

    console.log("Get Values >");
    circle.getterC();
    const Carea = circle.areaC();
    console.log("Show Output >")
    console.log(`The area of the circle is ${Carea} with radius ${r}`);