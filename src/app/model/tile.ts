export class Tile {

  private _id: number;

  private _name: string;

  private _price: number;

  private _rating: number;

  constructor(id: number, name: string, price: number, rating: number) {
    this._id = id;
    this._name = name;
    this._price = price;
    this._rating = rating;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get rating(): number {
    return this._rating;
  }

  set rating(value: number) {
    this._rating = value;
  }
}

