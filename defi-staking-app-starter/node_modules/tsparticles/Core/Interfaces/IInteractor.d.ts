import type { Particle } from "../Particle";
import type { InteractorType } from "../../Enums";
export interface IInteractor {
    type: InteractorType;
    reset(particle: Particle): void;
}
