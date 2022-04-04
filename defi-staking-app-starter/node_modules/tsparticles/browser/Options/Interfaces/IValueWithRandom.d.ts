import type { RangeValue } from "../../Types";
import type { IRandom } from "./IRandom";
export interface IValueWithRandom {
    random: boolean | IRandom;
    value: RangeValue;
}
