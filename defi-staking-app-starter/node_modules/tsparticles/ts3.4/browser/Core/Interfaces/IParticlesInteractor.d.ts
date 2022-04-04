import { Particle } from "../Particle";
import { IInteractor } from "./IInteractor";
import { IDelta } from "./IDelta";
export interface IParticlesInteractor extends IInteractor {
    isEnabled(particle: Particle): boolean;
    interact(particle: Particle, delta: IDelta): void;
}
