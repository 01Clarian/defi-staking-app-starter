import { IAnimatableColor } from "../../Interfaces/Particles/IAnimatableColor";
import { OptionsColor } from "../OptionsColor";
import { RecursivePartial } from "../../../Types";
import { IOptionLoader } from "../../Interfaces/IOptionLoader";
import { HslAnimation } from "./HslAnimation";
export declare class AnimatableColor extends OptionsColor implements IAnimatableColor, IOptionLoader<IAnimatableColor> {
    animation: HslAnimation;
    constructor();
    static create(source?: AnimatableColor, data?: string | RecursivePartial<IAnimatableColor>): AnimatableColor;
    load(data?: RecursivePartial<IAnimatableColor>): void;
}
