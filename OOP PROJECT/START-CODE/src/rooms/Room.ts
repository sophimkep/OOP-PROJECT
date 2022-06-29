import { Table } from "./Table";

/**
 * A room is composed of many tables
 */
export class Room {
  private tables: Table[] = [];

  constructor(private id: number) {}

  getNumberOfTables() {
    return this.tables.length;
  }

  getTables() {
    return this.tables;
  }

  addTable(...table: Table[]){
    if (this.tables.length < 5){
      this.tables = this.tables.concat(table);
    }else{
      return "Cannot add table! Max 4";
    }
  }

  isTableFree() {
    for (let table of this.tables){
      if (table.findFreeChair()){
        return true;
      }
    }
    return false;
  }
}
