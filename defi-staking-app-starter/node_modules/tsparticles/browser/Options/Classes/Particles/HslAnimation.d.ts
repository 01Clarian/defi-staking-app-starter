import type { RecursivePartial } from "../../../Types";
import { ColorAnimation } from "../ColorAnimation";
import type { IOptionLoader } from "../../Interfaces/IOptionLoader";
import type { IHslAnimation } from "../../Interfaces/IHslAnimation";
export declare class HslAnimation implements IHslAnimation, IOptionLoader<IHslAnimation> {
    h: ColorAnimation;
    s: ColorAnimation;
    l: ColorAnimation;
    constructor();
    load(data?: RecursivePartial<IHslAnimation>): void;
}
