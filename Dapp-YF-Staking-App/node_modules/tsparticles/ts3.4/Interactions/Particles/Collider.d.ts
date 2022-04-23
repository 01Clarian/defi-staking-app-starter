import { Particle } from "../../Core/Particle";
import { Container } from "../../Core/Container";
import { ParticlesInteractorBase } from "../../Core/ParticlesInteractorBase";
export declare class Collider extends ParticlesInteractorBase {
    constructor(container: Container);
    isEnabled(particle: Particle): boolean;
    reset(): void;
    interact(p1: Particle): void;
    private resolveCollision;
    private absorb;
}
