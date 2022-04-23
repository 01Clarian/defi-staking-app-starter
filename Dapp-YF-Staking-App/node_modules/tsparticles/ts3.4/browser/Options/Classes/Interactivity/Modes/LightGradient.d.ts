import { ILightGradient } from "../../../Interfaces/Interactivity/Modes/ILightArea";
import { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import { OptionsColor } from "../../OptionsColor";
import { RecursivePartial } from "../../../../Types";
export declare class LightGradient implements ILightGradient, IOptionLoader<ILightGradient> {
    start: OptionsColor;
    stop: OptionsColor;
    constructor();
    load(data?: RecursivePartial<ILightGradient>): void;
}
