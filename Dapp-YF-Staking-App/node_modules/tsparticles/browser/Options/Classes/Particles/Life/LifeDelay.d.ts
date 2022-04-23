import type { ILifeDelay } from "../../../Interfaces/Particles/Life/ILifeDelay";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import type { RecursivePartial } from "../../../../Types";
import { ValueWithRandom } from "../../ValueWithRandom";
export declare class LifeDelay extends ValueWithRandom implements ILifeDelay, IOptionLoader<ILifeDelay> {
    sync: boolean;
    constructor();
    load(data?: RecursivePartial<ILifeDelay>): void;
}
