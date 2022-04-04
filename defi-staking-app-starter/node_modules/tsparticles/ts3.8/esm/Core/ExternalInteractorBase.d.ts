import type { IDelta, IExternalInteractor } from "./Interfaces";
import type { Particle } from "./Particle";
import type { Container } from "./Container";
import { InteractorType } from "../Enums";
export declare abstract class ExternalInteractorBase implements IExternalInteractor {
    protected readonly container: Container;
    protected constructor(container: Container);
    type: InteractorType;
    abstract interact(delta: IDelta): void;
    abstract isEnabled(): boolean;
    abstract reset(particle: Particle): void;
}
