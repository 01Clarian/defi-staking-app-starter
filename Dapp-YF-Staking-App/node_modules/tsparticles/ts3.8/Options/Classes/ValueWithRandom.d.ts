import type { IValueWithRandom } from "../Interfaces/IValueWithRandom";
import type { IOptionLoader } from "../Interfaces/IOptionLoader";
import { Random } from "./Random";
import type { RangeValue, RecursivePartial } from "../../Types";
export declare abstract class ValueWithRandom implements IValueWithRandom, IOptionLoader<IValueWithRandom> {
    random: Random;
    value: RangeValue;
    protected constructor();
    load(data?: RecursivePartial<IValueWithRandom>): void;
}
