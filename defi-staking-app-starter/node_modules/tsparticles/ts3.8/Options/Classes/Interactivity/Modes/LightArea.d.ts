import type { ILightArea } from "../../../Interfaces/Interactivity/Modes/ILightArea";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import { LightGradient } from "./LightGradient";
import type { RecursivePartial } from "../../../../Types";
export declare class LightArea implements ILightArea, IOptionLoader<ILightArea> {
    gradient: LightGradient;
    radius: number;
    constructor();
    load(data?: RecursivePartial<ILightArea>): void;
}
