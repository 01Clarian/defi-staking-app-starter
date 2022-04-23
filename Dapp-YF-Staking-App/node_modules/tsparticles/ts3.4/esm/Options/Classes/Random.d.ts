import { IRandom } from "../Interfaces/IRandom";
import { IOptionLoader } from "../Interfaces/IOptionLoader";
import { RecursivePartial } from "../../Types";
export declare class Random implements IRandom, IOptionLoader<IRandom> {
    enable: boolean;
    minimumValue: number;
    constructor();
    load(data?: RecursivePartial<IRandom>): void;
}
