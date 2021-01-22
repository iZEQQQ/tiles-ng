export class Tile {


  private _id: number;

  private _name: string;

  private _price: number;

  private _type: string;

  private _page: string;

  // private _rating: number;


  constructor(id?: number, name?: string, price?: number, type?: string, page?: string) {
    this._id = id;
    this._name = name;
    this._price = price;
    this._type = type;
    // this._rating = rating;
    this._page = page;
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

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get page(): string {
    return this._page;
  }

  set page(value: string) {
    this._page = value;
  }

// set rating(value: number) {
  //   this._rating = value;
  // }
}

