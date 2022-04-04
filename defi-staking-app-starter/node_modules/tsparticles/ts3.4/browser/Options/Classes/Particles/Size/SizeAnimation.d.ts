import { ISizeAnimation } from "../../../Interfaces/Particles/Size/ISizeAnimation";
import { RecursivePartial } from "../../../../Types";
import { DestroyType, StartValueType } from "../../../../Enums";
import { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import { AnimationOptions } from "../../AnimationOptions";
export declare class SizeAnimation extends AnimationOptions implements ISizeAnimation, IOptionLoader<ISizeAnimation> {
    size_min: number;
    destroy: DestroyType | keyof typeof DestroyType;
    minimumValue: number;
    startValue: StartValueType | keyof typeof StartValueType;
    constructor();
    load(data?: RecursivePartial<ISizeAnimation>): void;
}
