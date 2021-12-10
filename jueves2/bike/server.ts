import {Bike} from './typescript';

const Shimano = new Bike(2500, "50", 150);
const Tottem = new Bike(2000, "55", 263);
const Bianchi = new Bike(1000, "15", 184);

Shimano.ride();
Shimano.ride();
Shimano.ride();
Shimano.reverse();
Shimano.displayInfo();

Tottem.ride();
Tottem.ride();
Tottem.reverse();
Tottem.reverse();
Tottem.displayInfo();

Bianchi.reverse();
Bianchi.reverse();
Bianchi.reverse();
Bianchi.displayInfo();

