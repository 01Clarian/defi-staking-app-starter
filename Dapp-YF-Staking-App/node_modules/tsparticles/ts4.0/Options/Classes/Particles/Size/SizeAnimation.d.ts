import type { ISizeAnimation } from "../../../Interfaces/Particles/Size/ISizeAnimation";
import type { RecursivePartial } from "../../../../Types";
import { DestroyType, StartValueType } from "../../../../Enums";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import { AnimationOptions } from "../../AnimationOptions";
export declare class SizeAnimation extends AnimationOptions implements ISizeAnimation, IOptionLoader<ISizeAnimation> {
    get size_min(): number;
    set size_min(value: number);
    destroy: DestroyType | keyof typeof DestroyType;
    minimumValue: number;
    startValue: StartValueType | keyof typeof StartValueType;
    constructor();
    load(data?: RecursivePartial<ISizeAnimation>): void;
}
