import type { ILifeDuration } from "../../../Interfaces/Particles/Life/ILifeDuration";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import type { RecursivePartial } from "../../../../Types";
import { ValueWithRandom } from "../../ValueWithRandom";
export declare class LifeDuration extends ValueWithRandom implements ILifeDuration, IOptionLoader<ILifeDuration> {
    sync: boolean;
    constructor();
    load(data?: RecursivePartial<ILifeDuration>): void;
}
