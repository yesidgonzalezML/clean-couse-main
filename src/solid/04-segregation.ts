interface Bird{
    eat(): void;
}

class Tucan implements Bird, FlyingBird {
    public eat(){}
    public fly(){}
}

class Hummingbird implements Bird, FlyingBird {
    public eat(){}
    public fly(){}

}

class Ostrich  implements Bird, RunningBird {
    public eat() { }
    public run() { }

}

interface FlyingBird {
    fly(): void;
}

interface RunningBird {
    run(): void;
}

class Penguin implements Bird, SwimmerBird {
    public eat() { }
    public swim() { }
}

interface SwimmerBird {
    swim(): void;
}