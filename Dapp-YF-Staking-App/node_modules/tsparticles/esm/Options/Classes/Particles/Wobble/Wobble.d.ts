import type { IWobble } from "../../../Interfaces/Particles/Wobble/IWobble";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import type { RangeValue, RecursivePartial } from "../../../../Types";
export declare class Wobble implements IWobble, IOptionLoader<IWobble> {
    distance: RangeValue;
    enable: boolean;
    speed: RangeValue;
    constructor();
    load(data?: RecursivePartial<IWobble>): void;
}
