import { Particle } from "../../Core/Particle";
import { Container } from "../../Core/Container";
import { IParticle } from "../../Core/Interfaces";
import { ParticlesInteractorBase } from "../../Core/ParticlesInteractorBase";
export declare class Linker extends ParticlesInteractorBase {
    constructor(container: Container);
    isEnabled(particle: Particle): boolean;
    reset(): void;
    interact(p1: IParticle): void;
}
