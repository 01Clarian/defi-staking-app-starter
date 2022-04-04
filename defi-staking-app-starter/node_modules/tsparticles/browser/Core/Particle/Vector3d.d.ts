import { Vector } from "./Vector";
import type { ICoordinates3d } from "../Interfaces";
export declare class Vector3d extends Vector implements ICoordinates3d {
    static clone(source: Vector3d): Vector3d;
    static create(x: number | ICoordinates3d, y?: number, z?: number): Vector3d;
    z: number;
    protected constructor(x: number | ICoordinates3d, y?: number, z?: number);
    add(v: Vector): Vector;
    addTo(v: Vector): void;
    sub(v: Vector): Vector;
    subFrom(v: Vector): void;
    mult(n: number): Vector;
    multTo(n: number): void;
    div(n: number): Vector;
    divTo(n: number): void;
    copy(): Vector3d;
    setTo(v: Vector): void;
}
