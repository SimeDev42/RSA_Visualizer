let Person1;
let Person2;
const primesLink = "https://raw.githubusercontent.com/srmalins/primelists/master/100primes.txt";
let primes = [];
let sc1a;
let sc1b;
let sc2a;
let sc2b;
let lastN1;
let lastN2;
function setup(){
    primes = loadStrings(primesLink);
    console.log(primes);
    createCanvas(900,900);

    let red = loadImage("https://simedev42.github.io/RSA_Visualizer/media/person_red.png");
    let blue = loadImage("https://simedev42.github.io/RSA_Visualizer/media/person_blue.png");
    Person1 = new Person("Bob", red, 100, 100);
    Person2 = new Person("John", blue, 500, 100);

    let bt1 = createButton("Generate keys for Bob");
    bt1.position(100,400);
    bt1.mousePressed(calculate1);

    let bt2 = createButton("Generate keys for John");
    bt2.position(500,400);
    bt2.mousePressed(calculate2);

    sc1a = createSlider(0, 99, 0);
    sc1a.position(100,450);
    sc1b = createSlider(0, 99, 0);
    sc1b.position(100,550);

    sc2a = createSlider(0, 99, 0);
    sc2a.position(500,450);
    sc2b = createSlider(0, 99, 0);
    sc2b.position(500,550);
}

function draw(){
    background(255);
    Person1.show();
    Person2.show();
    textFont("Montserrat");
    text("Prime number n. 1 = " + String(primes[sc1a.value()]), 100, 500);
    text("Prime number n. 2 = " + String(primes[sc1b.value()]), 100, 600);
    text("Product of the prime numbers = " + String(primes[sc1a.value()] * primes[sc1b.value()]), 100, 650);

    text("Prime number n. 1 = " + String(primes[sc2a.value()]), 500, 500);
    text("Prime number n. 2 = " + String(primes[sc2b.value()]), 500, 600);
    text("Product of the prime numbers = " + String(primes[sc2a.value()] * primes[sc2b.value()]), 500, 650);
    
}

function calculate1(){
    let x = primes[sc1a.value()];
    let y = primes[sc1b.value()]
    let n = x*y;
    if (n != lastN1){
        Person1.calculateKeys(x,y,n);
        lastN1 = n;
    }
}

function calculate2(){
    let x = primes[sc2a.value()];
    let y = primes[sc2b.value()]
    let n = x*y;
    if (n != lastN2){
        Person2.calculateKeys(x,y,n);
        lastN2 = n;
    }
}