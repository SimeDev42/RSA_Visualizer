let Person1;
let Person2;

function setup(){
    createCanvas(900,900);
    let red = loadImage("https://simedev42.github.io/RSA_Visualizer/media/person_red.png");
    let blue = loadImage("https://simedev42.github.io/RSA_Visualizer/media/person_blue.png");
    Person1 = new Person("Bob", red, 100, 100);
    Person2 = new Person("Alice", blue, 500, 100);
    let bt = createButton("Generate keys");
    bt.position(350,400);
}

function draw(){
    Person1.show();
    Person2.show();
}