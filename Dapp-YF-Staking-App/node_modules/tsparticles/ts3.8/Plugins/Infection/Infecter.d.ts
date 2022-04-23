import { InfectableContainer, InfectableParticle } from "./Types";
export declare class Infecter {
    private readonly container;
    constructor(container: InfectableContainer);
    startInfection(particle: InfectableParticle, stage: number): void;
    updateInfectionStage(particle: InfectableParticle, stage: number): void;
    updateInfection(particle: InfectableParticle, delta: number): void;
    private nextInfectionStage;
}
