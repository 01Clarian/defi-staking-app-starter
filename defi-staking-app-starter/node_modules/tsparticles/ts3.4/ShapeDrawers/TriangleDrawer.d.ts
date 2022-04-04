import { ISide, PolygonDrawerBase } from "./PolygonDrawerBase";
import { ICoordinates } from "../Core/Interfaces/ICoordinates";
import { IParticle } from "../Core/Interfaces/IParticle";
export declare class TriangleDrawer extends PolygonDrawerBase {
    getSidesCount(): number;
    getSidesData(particle: IParticle, radius: number): ISide;
    getCenter(particle: IParticle, radius: number): ICoordinates;
}
