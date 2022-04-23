import { Particle } from "../Particle";
import { InteractorType } from "../../Enums";
export interface IInteractor {
    type: InteractorType;
    reset(particle: Particle): void;
}
