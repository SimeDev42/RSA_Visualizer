class Person{
    constructor(name, c, x, y){
        this.personName = name;
        this.icon = c;
        this.x = x;
        this.y = y;
    }

    privateKey = [];
    publicKey = [];

    show(){
        image(this.icon, this.x, this.y, 200, 200);
    }

    sendData(){

    }

    receiveData(){

    }

    calculateKeys(x, y, n){
        let totient = (x-1)*(y-1);
        let e = get_coprimes(n, totient);
        if (e.length > 1){
            e = e[1];
        }
        else{
            e = e[0];
        }

        let k = get_k(totient, e);

        let d = int((k*totient+1)/e);

        this.privateKey = [];
        this.publicKey = [];
        this.privateKey.push(d);
        this.privateKey.push(n);
        this.publicKey.push(n);
        this.publicKey.push(e);
    }
}