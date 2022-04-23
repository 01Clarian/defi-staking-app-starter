import type { IColorAnimation } from "../Interfaces/IColorAnimation";
import type { RangeValue, RecursivePartial } from "../../Types";
import type { IOptionLoader } from "../Interfaces/IOptionLoader";
export declare class ColorAnimation implements IColorAnimation, IOptionLoader<IColorAnimation> {
    count: number;
    enable: boolean;
    offset: RangeValue;
    speed: number;
    sync: boolean;
    constructor();
    load(data?: RecursivePartial<IColorAnimation>): void;
}
