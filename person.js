class Person{
    constructor(name, c, x, y){
        this.personName = name;
        this.icon = c;
        this.x = x;
        this.y = y;
    }

    privateKey = 0;
    publicKey = 0;

    show(){
        image(this.icon, this.x, this.y, 200, 200);
    }

    sendData(){

    }

    receiveData(){

    }

    calculateKeys(x, y, n){
        console.log(n);
        let totient = (x-1)*(y-1);
        console.log(totient);
        let e = get_coprimes(n, totient);
        console.log(e);
    }
}