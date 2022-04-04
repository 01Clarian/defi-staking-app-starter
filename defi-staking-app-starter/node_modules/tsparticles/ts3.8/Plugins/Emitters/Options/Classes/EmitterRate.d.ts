import type { IEmitterRate } from "../Interfaces/IEmitterRate";
import type { RangeValue, RecursivePartial } from "../../../../Types";
import type { IOptionLoader } from "../../../../Options/Interfaces/IOptionLoader";
export declare class EmitterRate implements IEmitterRate, IOptionLoader<IEmitterRate> {
    quantity: RangeValue;
    delay: RangeValue;
    constructor();
    load(data?: RecursivePartial<IEmitterRate>): void;
}
