// basic class with typed member
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

// class with visibility modifiers
class PersonPrivate {
  private name: string;
  public constructor(name: string) { this.name = name; }
  public getName(): string { return this.name; }
}

// parameter properties
class PersonParam {
  public constructor(private name: string) {}
  public getName(): string { return this.name; }
}

// readonly member
class PersonReadonly {
  private readonly name: string;
  public constructor(name: string) { this.name = name; }
  public getName(): string { return this.name; }
}

// implements interface
interface Shape { getArea: () => number; }
class Rectangle implements Shape {
  public constructor(protected readonly width: number, protected readonly height: number) {}
  public getArea(): number { return this.width * this.height; }
}

// extends class
class Square extends Rectangle {
  public constructor(width: number) { super(width, width); }
}

// override method
class SquareOverride extends Rectangle {
  public constructor(width: number, height: number) { super(width, height); }
  public override toString(): string { return `Square[width=${this.width}]`; }
}

// abstract class
abstract class Polygon {
  public abstract getArea(): number;
  public toString(): string { return `Polygon[area=${this.getArea()}]`; }
}

class RectanglePolygon extends Polygon {
  public constructor(protected readonly width: number, protected readonly height: number) { super(); }
  public getArea(): number { return this.width * this.height; }
}
