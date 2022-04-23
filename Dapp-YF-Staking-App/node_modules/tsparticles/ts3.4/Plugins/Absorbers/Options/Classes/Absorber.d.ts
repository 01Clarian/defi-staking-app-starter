import { IAbsorber } from "../Interfaces/IAbsorber";
import { ICoordinates } from "../../../../Core/Interfaces/ICoordinates";
import { RecursivePartial } from "../../../../Types";
import { AbsorberSize } from "./AbsorberSize";
import { OptionsColor } from "../../../../Options/Classes/OptionsColor";
import { IOptionLoader } from "../../../../Options/Interfaces/IOptionLoader";
export declare class Absorber implements IAbsorber, IOptionLoader<IAbsorber> {
    color: OptionsColor;
    draggable: boolean;
    name?: string;
    opacity: number;
    position?: RecursivePartial<ICoordinates>;
    size: AbsorberSize;
    destroy: boolean;
    orbits: boolean;
    constructor();
    load(data?: RecursivePartial<IAbsorber>): void;
}
