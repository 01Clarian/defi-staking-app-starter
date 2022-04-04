import type { IRollLight } from "../../../Interfaces/Particles/Roll/IRollLight";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import type { RecursivePartial } from "../../../../Types";
export declare class RollLight implements IRollLight, IOptionLoader<IRollLight> {
    enable: boolean;
    value: number;
    constructor();
    load(data?: RecursivePartial<IRollLight>): void;
}
