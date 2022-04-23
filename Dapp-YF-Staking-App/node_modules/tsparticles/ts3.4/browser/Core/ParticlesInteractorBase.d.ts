import { IDelta, IParticlesInteractor } from "./Interfaces";
import { Particle } from "./Particle";
import { Container } from "./Container";
import { InteractorType } from "../Enums";
export declare abstract class ParticlesInteractorBase implements IParticlesInteractor {
    protected readonly container: Container;
    protected constructor(container: Container);
    type: InteractorType;
    abstract interact(particle: Particle, delta: IDelta): void;
    abstract isEnabled(particle: Particle): boolean;
    abstract reset(particle: Particle): void;
}
