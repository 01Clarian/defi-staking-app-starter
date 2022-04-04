import { IValueWithRandom } from "../Interfaces/IValueWithRandom";
import { IOptionLoader } from "../Interfaces/IOptionLoader";
import { Random } from "./Random";
import { RangeValue, RecursivePartial } from "../../Types";
export declare abstract class ValueWithRandom implements IValueWithRandom, IOptionLoader<IValueWithRandom> {
    random: Random;
    value: RangeValue;
    protected constructor();
    load(data?: RecursivePartial<IValueWithRandom>): void;
}
