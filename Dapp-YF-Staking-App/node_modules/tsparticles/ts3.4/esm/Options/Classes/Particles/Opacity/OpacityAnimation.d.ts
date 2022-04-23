import { IOpacityAnimation } from "../../../Interfaces/Particles/Opacity/IOpacityAnimation";
import { RecursivePartial } from "../../../../Types";
import { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import { DestroyType, StartValueType } from "../../../../Enums/Types";
import { AnimationOptions } from "../../AnimationOptions";
export declare class OpacityAnimation extends AnimationOptions implements IOpacityAnimation, IOptionLoader<IOpacityAnimation> {
    opacity_min: number;
    destroy: DestroyType | keyof typeof DestroyType;
    minimumValue: number;
    startValue: StartValueType | keyof typeof StartValueType;
    constructor();
    load(data?: RecursivePartial<IOpacityAnimation>): void;
}
