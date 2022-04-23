import type { IContainerPlugin } from "../../Core/Interfaces/IContainerPlugin";
import { AbsorberInstance } from "./AbsorberInstance";
import type { Container } from "../../Core/Container";
import type { Particle } from "../../Core/Particle";
import type { IAbsorber } from "./Options/Interfaces/IAbsorber";
import { Absorber } from "./Options/Classes/Absorber";
import type { SingleOrMultiple, RecursivePartial } from "../../Types";
import type { IOptions } from "../../Options/Interfaces/IOptions";
import type { IAbsorberOptions } from "./Options/Interfaces/IAbsorberOptions";
import type { ICoordinates } from "../../Core/Interfaces/ICoordinates";
export declare class Absorbers implements IContainerPlugin {
    private readonly container;
    array: AbsorberInstance[];
    absorbers: SingleOrMultiple<Absorber>;
    interactivityAbsorbers: SingleOrMultiple<Absorber>;
    constructor(container: Container);
    init(options?: RecursivePartial<IOptions & IAbsorberOptions>): void;
    particleUpdate(particle: Particle): void;
    draw(context: CanvasRenderingContext2D): void;
    stop(): void;
    resize(): void;
    handleClickMode(mode: string): void;
    addAbsorber(options: IAbsorber, position?: ICoordinates): AbsorberInstance;
    removeAbsorber(absorber: AbsorberInstance): void;
}
