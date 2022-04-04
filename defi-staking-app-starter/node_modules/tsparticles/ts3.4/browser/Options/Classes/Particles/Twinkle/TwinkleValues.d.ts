import { ITwinkleValues } from "../../../Interfaces/Particles/Twinkle/ITwinkleValues";
import { RecursivePartial } from "../../../../Types";
import { OptionsColor } from "../../OptionsColor";
import { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class TwinkleValues implements ITwinkleValues, IOptionLoader<ITwinkleValues> {
    color?: OptionsColor;
    enable: boolean;
    frequency: number;
    opacity: number;
    constructor();
    load(data?: RecursivePartial<ITwinkleValues>): void;
}
