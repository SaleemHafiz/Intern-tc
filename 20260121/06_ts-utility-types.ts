// Partial makes all properties optional
interface Point { x: number; y: number; }
let pointPart: Partial<Point> = {};
pointPart.x = 10;

// Required makes all properties required
interface Car { make: string; model: string; mileage?: number; }
let myCar: Required<Car> = { make: 'Ford', model: 'Focus', mileage: 12000 };

// Record defines an object type with specific key and value types
const nameAgeMap: Record<string, number> = { 'Alice': 21, 'Bob': 25 };

// Omit removes keys from a type
interface Person { name: string; age: number; location?: string; }
const bobOmit: Omit<Person, 'age' | 'location'> = { name: 'Bob' };

// Pick keeps only specified keys
const bobPick: Pick<Person, 'name'> = { name: 'Bob' };

// Exclude removes types from a union
type Primitive = string | number | boolean;
const value: Exclude<Primitive, string> = true;

// ReturnType extracts function return type
type PointGenerator = () => { x: number; y: number; };
const pointReturn: ReturnType<PointGenerator> = { x: 10, y: 20 };

// Parameters extracts function parameter types
type PointPrinter = (p: { x: number; y: number }) => void;
const pointParam: Parameters<PointPrinter>[0] = { x: 10, y: 20 };

// Readonly makes properties immutable
const personReadonly: Readonly<Person> = { name: "Dylan", age: 35 };
// personReadonly.name = 'Israel'; // Error
