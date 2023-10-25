class Key {
  private signature: number = Math.random();

  public getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  public getKey(this: Person): number {
    return this.key.getSignature();
  }
}

abstract class House {
  protected door: boolean = false;
  protected tenants: Person[] = [];
  constructor(protected key: Key) {}

  public comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
    } else {
      console.log("Door is closed!!");
    }
  };
  public abstract openDoor(key: number): void;
}

class MyHouse extends House{
public openDoor(key: number): void {
    if(key === this.key.getSignature()) {
        this.door = true;
    }
    else {
        console.log("Wrong key!");
    }
}
}
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
