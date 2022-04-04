import type { ITwinkleValues } from "../../../Interfaces/Particles/Twinkle/ITwinkleValues";
import type { RecursivePartial } from "../../../../Types";
import { OptionsColor } from "../../OptionsColor";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class TwinkleValues implements ITwinkleValues, IOptionLoader<ITwinkleValues> {
    color?: OptionsColor;
    enable: boolean;
    frequency: number;
    opacity: number;
    constructor();
    load(data?: RecursivePartial<ITwinkleValues>): void;
}
