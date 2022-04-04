import { SingleOrMultiple } from "../../../../Types";
import { IAbsorber } from "./IAbsorber";
import { IInteractivity } from "../../../../Options/Interfaces/Interactivity/IInteractivity";
import { IModes } from "../../../../Options/Interfaces/Interactivity/Modes/IModes";
export interface IAbsorberOptions {
    absorbers: SingleOrMultiple<IAbsorber>;
    interactivity: IInteractivity & {
        modes: IModes & {
            absorbers: SingleOrMultiple<IAbsorber>;
        };
    };
}
