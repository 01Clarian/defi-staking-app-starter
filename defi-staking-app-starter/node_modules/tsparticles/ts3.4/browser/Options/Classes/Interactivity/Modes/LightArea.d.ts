import { ILightArea } from "../../../Interfaces/Interactivity/Modes/ILightArea";
import { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import { LightGradient } from "./LightGradient";
import { RecursivePartial } from "../../../../Types";
export declare class LightArea implements ILightArea, IOptionLoader<ILightArea> {
    gradient: LightGradient;
    radius: number;
    constructor();
    load(data?: RecursivePartial<ILightArea>): void;
}
