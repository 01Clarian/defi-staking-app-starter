import { DestroyType, StartValueType } from "../../../../Enums/Types";
import { IAnimation } from "../../IAnimation";
export interface IOpacityAnimation extends IAnimation {
    opacity_min: number;
    destroy: DestroyType | keyof typeof DestroyType;
    minimumValue: number;
    startValue: StartValueType | keyof typeof StartValueType;
}
