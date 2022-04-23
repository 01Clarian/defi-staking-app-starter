import type { IRotate } from "../../../Interfaces/Particles/Rotate/IRotate";
import { RotateAnimation } from "./RotateAnimation";
import { RotateDirection, RotateDirectionAlt } from "../../../../Enums";
import type { RecursivePartial } from "../../../../Types";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import { ValueWithRandom } from "../../ValueWithRandom";
export declare class Rotate extends ValueWithRandom implements IRotate, IOptionLoader<IRotate> {
    animation: RotateAnimation;
    direction: RotateDirection | keyof typeof RotateDirection | RotateDirectionAlt;
    path: boolean;
    constructor();
    load(data?: RecursivePartial<IRotate>): void;
}
