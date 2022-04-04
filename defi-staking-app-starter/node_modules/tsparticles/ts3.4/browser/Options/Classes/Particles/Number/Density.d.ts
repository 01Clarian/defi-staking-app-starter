import { IDensity } from "../../../Interfaces/Particles/Number/IDensity";
import { RecursivePartial } from "../../../../Types";
import { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class Density implements IDensity, IOptionLoader<IDensity> {
    value_area: number;
    area: number;
    enable: boolean;
    factor: number;
    constructor();
    load(data?: RecursivePartial<IDensity>): void;
}
