import { Infecter } from "./Infecter";
import { Particle } from "../../Core/Particle";
import { Container } from "../../Core/Container";
import { IParticle } from "../../Core/Interfaces";
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
