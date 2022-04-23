import { AbsorberInstance } from "./AbsorberInstance";
import { IAbsorber } from "./Options/Interfaces/IAbsorber";
import { ICoordinates } from "../../Core/Interfaces/ICoordinates";
export interface AbsorberContainer {
    addAbsorber: (options: IAbsorber, position: ICoordinates) => AbsorberInstance;
    getAbsorber: (idxOrName?: number | string) => AbsorberInstance | undefined;
}
