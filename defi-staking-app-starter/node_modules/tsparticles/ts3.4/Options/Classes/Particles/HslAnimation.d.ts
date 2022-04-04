import { RecursivePartial } from "../../../Types";
import { ColorAnimation } from "../ColorAnimation";
import { IOptionLoader } from "../../Interfaces/IOptionLoader";
import { IHslAnimation } from "../../Interfaces/IHslAnimation";
export declare class HslAnimation implements IHslAnimation, IOptionLoader<IHslAnimation> {
    h: ColorAnimation;
    s: ColorAnimation;
    l: ColorAnimation;
    constructor();
    load(data?: RecursivePartial<IHslAnimation>): void;
}
