class Person{
    constructor(name, c, x, y){
        this.personName = name;
        this.icon = c;
        this.x = x;
        this.y = y;
    }

    show(){
        image(this.icon, this.x, this.y, 200, 200);
    }
}