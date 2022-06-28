import { Gender } from "../Person";
import { Staff, StaffCategory } from "./Staff";

/**
 * A doctor is a staff with a mediacal speciality
 */
export class Chef extends Staff {

  constructor(category: StaffCategory, name: string, age: number, gender: Gender, protected salary: number) {
    super(category, name, age, gender);
  }
}
