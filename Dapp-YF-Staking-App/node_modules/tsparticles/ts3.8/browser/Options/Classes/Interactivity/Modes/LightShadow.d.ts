import type { ILightShadow } from "../../../Interfaces/Interactivity/Modes/ILightShadow";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import { OptionsColor } from "../../OptionsColor";
import type { RecursivePartial } from "../../../../Types";
export declare class LightShadow implements ILightShadow, IOptionLoader<ILightShadow> {
    color: OptionsColor;
    length: number;
    constructor();
    load(data?: RecursivePartial<ILightShadow>): void;
}
