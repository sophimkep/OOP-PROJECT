import { Gender } from "../Person";
import { Person } from "../Person";

/**
 * A patient is a personn with some heath issues
 */
export class Customer extends Person {

  constructor(name: string, age: number, gender: Gender) {
    super(name, age, gender);
  }

}
