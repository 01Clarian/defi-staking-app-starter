import type { ICoordinates } from "../Interfaces/ICoordinates";
export declare class Vector implements ICoordinates {
    static clone(source: Vector): Vector;
    static create(x: number | ICoordinates, y?: number): Vector;
    static readonly origin: Vector;
    get angle(): number;
    set angle(angle: number);
    get length(): number;
    set length(length: number);
    x: number;
    y: number;
    protected constructor(x: number | ICoordinates, y?: number);
    add(v: Vector): Vector;
    addTo(v: Vector): void;
    sub(v: Vector): Vector;
    subFrom(v: Vector): void;
    mult(n: number): Vector;
    multTo(n: number): void;
    div(n: number): Vector;
    divTo(n: number): void;
    distanceTo(v: Vector): number;
    getLengthSq(): number;
    distanceToSq(v: Vector): number;
    manhattanDistanceTo(v: Vector): number;
    copy(): Vector;
    setTo(velocity: Vector): void;
    rotate(angle: number): Vector;
    private updateFromAngle;
}
