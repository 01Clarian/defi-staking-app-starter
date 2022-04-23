import { ISide, PolygonDrawerBase } from "./PolygonDrawerBase";
import type { ICoordinates } from "../Core/Interfaces/ICoordinates";
import type { IParticle } from "../Core/Interfaces/IParticle";
export declare class TriangleDrawer extends PolygonDrawerBase {
    getSidesCount(): number;
    getSidesData(particle: IParticle, radius: number): ISide;
    getCenter(particle: IParticle, radius: number): ICoordinates;
}
