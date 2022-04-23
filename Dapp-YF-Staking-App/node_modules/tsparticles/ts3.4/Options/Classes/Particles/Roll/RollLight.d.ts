import { IRollLight } from "../../../Interfaces/Particles/Roll/IRollLight";
import { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import { RecursivePartial } from "../../../../Types";
export declare class RollLight implements IRollLight, IOptionLoader<IRollLight> {
    enable: boolean;
    value: number;
    constructor();
    load(data?: RecursivePartial<IRollLight>): void;
}
