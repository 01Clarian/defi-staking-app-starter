import { DestroyType, StartValueType } from "../../../../Enums";
import { IAnimation } from "../../IAnimation";
export interface ISizeAnimation extends IAnimation {
    size_min: number;
    destroy: DestroyType | keyof typeof DestroyType;
    minimumValue: number;
    startValue: StartValueType | keyof typeof StartValueType;
}
