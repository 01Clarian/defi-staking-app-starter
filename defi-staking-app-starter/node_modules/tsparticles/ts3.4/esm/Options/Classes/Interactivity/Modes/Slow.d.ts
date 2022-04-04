import { ISlow } from "../../../Interfaces/Interactivity/Modes/ISlow";
import { RecursivePartial } from "../../../../Types";
import { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class Slow implements ISlow, IOptionLoader<ISlow> {
    active: boolean;
    factor: number;
    radius: number;
    constructor();
    load(data?: RecursivePartial<ISlow>): void;
}
