import { IDelta } from "./IDelta";
import { Particle } from "../Particle";
export interface IParticleUpdater {
    isEnabled(particle: Particle): boolean;
    update(particle: Particle, delta: IDelta): void;
}
