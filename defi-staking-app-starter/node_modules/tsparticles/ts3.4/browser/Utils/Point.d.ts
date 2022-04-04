import { ICoordinates } from "../Core/Interfaces/ICoordinates";
import { Particle } from "../Core/Particle";
export declare class Point {
    readonly position: ICoordinates;
    readonly particle: Particle;
    constructor(position: ICoordinates, particle: Particle);
}
