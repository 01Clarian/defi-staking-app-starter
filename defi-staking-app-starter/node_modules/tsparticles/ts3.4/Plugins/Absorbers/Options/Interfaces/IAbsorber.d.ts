import { ICoordinates } from "../../../../Core/Interfaces/ICoordinates";
import { IColor } from "../../../../Core/Interfaces/Colors";
import { IAbsorberSize } from "./IAbsorberSize";
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
