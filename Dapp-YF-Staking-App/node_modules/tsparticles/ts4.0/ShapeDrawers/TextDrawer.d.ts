import type { IShapeDrawer } from "../Core/Interfaces/IShapeDrawer";
import type { IParticle } from "../Core/Interfaces/IParticle";
import type { Container } from "../Core/Container";
export declare class TextDrawer implements IShapeDrawer {
    getSidesCount(): number;
    init(container: Container): Promise<void>;
    draw(context: CanvasRenderingContext2D, particle: IParticle, radius: number, opacity: number): void;
}
