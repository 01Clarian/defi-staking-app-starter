import { ISide, PolygonDrawerBase } from "./PolygonDrawerBase";
import { ICoordinates } from "../Core/Interfaces/ICoordinates";
import { IParticle } from "../Core/Interfaces/IParticle";
export declare class PolygonDrawer extends PolygonDrawerBase {
    getSidesData(particle: IParticle, radius: number): ISide;
    getCenter(particle: IParticle, radius: number): ICoordinates;
}
