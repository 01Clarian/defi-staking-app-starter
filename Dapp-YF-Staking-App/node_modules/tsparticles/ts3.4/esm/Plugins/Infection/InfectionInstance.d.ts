import { InfectableContainer } from "./Types";
import { Particle } from "../../Core/Particle";
import { IColor, IContainerPlugin } from "../../Core/Interfaces";
export declare class InfectionInstance implements IContainerPlugin {
    private readonly container;
    constructor(container: InfectableContainer);
    particlesSetup(): void;
    particleFillColor(particle: Particle): string | IColor | undefined;
    particleStrokeColor(particle: Particle): string | IColor | undefined;
}
