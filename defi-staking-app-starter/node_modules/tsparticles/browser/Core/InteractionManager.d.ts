import type { Container } from "./Container";
import { Particle } from "./Particle";
import { IDelta } from "./Interfaces";
export declare class InteractionManager {
    private readonly container;
    private readonly externalInteractors;
    private readonly particleInteractors;
    constructor(container: Container);
    externalInteract(delta: IDelta): void;
    particlesInteract(particle: Particle, delta: IDelta): void;
}
