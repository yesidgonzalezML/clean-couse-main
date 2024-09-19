
export abstract class Vehicle {
    abstract getNumberOfSeats(): number;
}

export class Tesla extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfTeslaSeats() {
        return this.numberOfSeats;
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Audi extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfAudiSeats() {
        return this.numberOfSeats;
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Toyota extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfToyotaSeats() {
        return this.numberOfSeats;
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Honda extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfHondaSeats() {
        return this.numberOfSeats;
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}


