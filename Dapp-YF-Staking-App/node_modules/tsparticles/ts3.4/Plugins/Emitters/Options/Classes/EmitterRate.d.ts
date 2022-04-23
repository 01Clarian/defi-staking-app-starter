import { IEmitterRate } from "../Interfaces/IEmitterRate";
import { RangeValue, RecursivePartial } from "../../../../Types";
import { IOptionLoader } from "../../../../Options/Interfaces/IOptionLoader";
export declare class EmitterRate implements IEmitterRate, IOptionLoader<IEmitterRate> {
    quantity: RangeValue;
    delay: RangeValue;
    constructor();
    load(data?: RecursivePartial<IEmitterRate>): void;
}
