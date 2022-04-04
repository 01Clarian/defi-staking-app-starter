import { InfectableContainer, InfectableParticle } from "./Types";
import { IDelta } from "../../Core/Interfaces";
import { ParticlesInteractorBase } from "../../Core/ParticlesInteractorBase";
export declare class ParticlesInfecter extends ParticlesInteractorBase {
    constructor(container: InfectableContainer);
    isEnabled(): boolean;
    reset(): void;
    interact(p1: InfectableParticle, delta: IDelta): void;
}
