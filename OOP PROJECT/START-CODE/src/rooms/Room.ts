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
    this.tables = this.tables.concat(table);
  }
}
