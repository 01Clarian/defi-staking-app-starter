import type { RangeValue } from "../../Types";
import type { IAnimation } from "./IAnimation";
export interface IColorAnimation extends IAnimation {
    offset: RangeValue;
}
