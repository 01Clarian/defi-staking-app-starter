import type { IShapeDrawer } from "../Core/Interfaces/IShapeDrawer";
import type { ICoordinates } from "../Core/Interfaces/ICoordinates";
import type { IParticle } from "../Core/Interfaces/IParticle";
export interface ISideCount {
    numerator: number;
    denominator: number;
}
export interface ISide {
    count: ISideCount;
    length: number;
}
export declare abstract class PolygonDrawerBase implements IShapeDrawer {
    getSidesCount(particle: IParticle): number;
    draw(context: CanvasRenderingContext2D, particle: IParticle, radius: number): void;
    abstract getSidesData(particle: IParticle, radius: number): ISide;
    abstract getCenter(particle: IParticle, radius: number): ICoordinates;
}
