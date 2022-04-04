import { ITwinkle } from "../../../Interfaces/Particles/Twinkle/ITwinkle";
import { RecursivePartial } from "../../../../Types";
import { TwinkleValues } from "./TwinkleValues";
import { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class Twinkle implements ITwinkle, IOptionLoader<ITwinkle> {
    lines: TwinkleValues;
    particles: TwinkleValues;
    constructor();
    load(data?: RecursivePartial<ITwinkle>): void;
}
