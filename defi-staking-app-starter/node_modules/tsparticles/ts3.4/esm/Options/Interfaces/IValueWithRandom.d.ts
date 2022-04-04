import { RangeValue } from "../../Types";
import { IRandom } from "./IRandom";
export interface IValueWithRandom {
    random: boolean | IRandom;
    value: RangeValue;
}
