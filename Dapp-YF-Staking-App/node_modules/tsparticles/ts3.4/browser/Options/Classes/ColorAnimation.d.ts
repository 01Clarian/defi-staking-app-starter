import { IColorAnimation } from "../Interfaces/IColorAnimation";
import { RangeValue, RecursivePartial } from "../../Types";
import { IOptionLoader } from "../Interfaces/IOptionLoader";
export declare class ColorAnimation implements IColorAnimation, IOptionLoader<IColorAnimation> {
    count: number;
    enable: boolean;
    offset: RangeValue;
    speed: number;
    sync: boolean;
    constructor();
    load(data?: RecursivePartial<IColorAnimation>): void;
}
