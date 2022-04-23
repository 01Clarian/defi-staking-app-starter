import { RangeValue } from "../../Types";
import { IAnimation } from "./IAnimation";
export interface IColorAnimation extends IAnimation {
    offset: RangeValue;
}
