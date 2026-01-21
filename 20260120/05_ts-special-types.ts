// Type: any
let v: any = true;
v = "string"; // No error
Math.round(v); // No error

// Type: unknown
let w: unknown = 1;
w = "string";
w = { runANonExistentMethod: () => console.log("I think therefore I am") } as { runANonExistentMethod: () => void };

// Type-check before using unknown
if (typeof w === 'object' && w !== null) {
    (w as { runANonExistentMethod: Function }).runANonExistentMethod();
}

// Type narrowing example
function processValue(value: unknown) {
    if (typeof value === 'string') {
        console.log(value.toUpperCase());
    } else if (Array.isArray(value)) {
        console.log(value.length);
    }
}

// Type: never
function throwError(message: string): never {
    throw new Error(message);
}

type Shape = { kind: 'circle', radius: number } | { kind: 'square', sideLength: number };
function getArea(shape: Shape): number {
    switch (shape.kind) {
        case 'circle': return Math.PI * shape.radius ** 2;
        case 'square': return shape.sideLength ** 2;
        default:
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}

// Type: undefined & null
let y: undefined = undefined;
let z: null = null;

// Optional parameter and property
function greet(name?: string) {
    return `Hello, ${name ?? 'stranger'}`;
}

interface User {
    name: string;
    age?: number; // number | undefined
}

// Nullish coalescing and optional chaining
const input: string | undefined = undefined;
const value = input ?? 'default';

const user: User | undefined = undefined;
const street = user?.age;
