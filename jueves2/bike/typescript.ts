
export class Bikes{

    price:number;
    max_speed:string;
    miles:number;
    
    constructor(price:number,max_speed:string,miles:number){
        this.price = price;
        this.max_speed = max_speed;
        this.miles = miles;
    }

    displayInfo(){
        console.log("Price: " + this.price + ", Max Speed: " + this.max_speed + ", Total Miles: " + this.miles)
    }

    ride(){
        this.miles += 10;
        console.log("Riding");
        return this;
    }

    reverse(){
        console.log("Reversing");
        this.miles -= 5;
        return this;
    }

}


const Shimano = new Bikes(3500, "80", 1500);
const Tottem = new Bikes(5000, "75", 2630);
const Bianchi = new Bikes(4000, "55", 1840);

Shimano.ride();;
Shimano.reverse();
Shimano.displayInfo();

Tottem.ride();
Tottem.ride();

Tottem.reverse();
Tottem.displayInfo();

Bianchi.reverse();
Bianchi.displayInfo();