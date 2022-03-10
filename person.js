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
}