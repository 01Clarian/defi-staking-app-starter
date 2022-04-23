import type { IParticle } from "../Core/Interfaces/IParticle";
import type { IShapeDrawer } from "../Core/Interfaces/IShapeDrawer";
export declare class StarDrawer implements IShapeDrawer {
    getSidesCount(particle: IParticle): number;
    draw(context: CanvasRenderingContext2D, particle: IParticle, radius: number): void;
}
