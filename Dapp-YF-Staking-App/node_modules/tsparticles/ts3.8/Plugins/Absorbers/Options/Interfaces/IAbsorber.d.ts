import type { ICoordinates } from "../../../../Core/Interfaces/ICoordinates";
import type { IColor } from "../../../../Core/Interfaces/Colors";
import type { IAbsorberSize } from "./IAbsorberSize";
import { RecursivePartial } from "../../../../Types";
export interface IAbsorber {
    color: IColor | string;
    name?: string;
    opacity: number;
    position?: RecursivePartial<ICoordinates>;
    size: IAbsorberSize;
    draggable: boolean;
    destroy: boolean;
    orbits: boolean;
}
