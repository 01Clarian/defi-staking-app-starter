import type { Infecter } from "./Infecter";
import type { Particle } from "../../Core/Particle";
import type { Container } from "../../Core/Container";
import type { IParticle } from "../../Core/Interfaces";
export interface IParticleInfection {
    stage?: number;
    time?: number;
    delay?: number;
    delayStage?: number;
}
export declare type InfectableContainer = Container & {
    infecter?: Infecter;
};
export declare type IInfectableParticle = IParticle & {
    infection: IParticleInfection;
};
export declare type InfectableParticle = Particle & IInfectableParticle;
