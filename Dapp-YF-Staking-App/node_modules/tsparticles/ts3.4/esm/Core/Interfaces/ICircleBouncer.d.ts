import { Vector } from "../Particle/Vector";
import { ICoordinates } from "./ICoordinates";
import { IVelocity } from "./IVelocity";
export interface ICircleBouncer {
    position: ICoordinates;
    velocity: Vector;
    radius: number;
    mass: number;
    factor: IVelocity;
}
