import type { ISplit } from "../../../Interfaces/Particles/Destroy/ISplit";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import { SplitFactor } from "./SplitFactor";
import { RecursivePartial } from "../../../../Types";
import { SplitRate } from "./SplitRate";
import { IParticles } from "../../../Interfaces/Particles/IParticles";
export declare class Split implements ISplit, IOptionLoader<ISplit> {
    count: number;
    factor: SplitFactor;
    rate: SplitRate;
    particles?: RecursivePartial<IParticles>;
    sizeOffset: boolean;
    constructor();
    load(data?: RecursivePartial<ISplit>): void;
}
