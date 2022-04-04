import { IRotateAnimation } from "./IRotateAnimation";
import { RotateDirection, RotateDirectionAlt } from "../../../../Enums";
import { IValueWithRandom } from "../../IValueWithRandom";
export interface IRotate extends IValueWithRandom {
    animation: IRotateAnimation;
    direction: RotateDirection | keyof typeof RotateDirection | RotateDirectionAlt;
    path: boolean;
}
