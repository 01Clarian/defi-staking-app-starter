import { ILightShadow } from "../../../Interfaces/Interactivity/Modes/ILightShadow";
import { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import { OptionsColor } from "../../OptionsColor";
import { RecursivePartial } from "../../../../Types";
export declare class LightShadow implements ILightShadow, IOptionLoader<ILightShadow> {
    color: OptionsColor;
    length: number;
    constructor();
    load(data?: RecursivePartial<ILightShadow>): void;
}
