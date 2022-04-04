import type { Container } from "../../Core/Container";
import { Particle } from "../../Core/Particle";
import { ParticlesInteractorBase } from "../../Core/ParticlesInteractorBase";
export declare class Lighter extends ParticlesInteractorBase {
    constructor(container: Container);
    interact(particle: Particle): void;
    isEnabled(): boolean;
    reset(): void;
}
