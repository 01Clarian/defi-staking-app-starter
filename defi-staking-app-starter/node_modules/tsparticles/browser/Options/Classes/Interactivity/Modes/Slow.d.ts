import type { ISlow } from "../../../Interfaces/Interactivity/Modes/ISlow";
import type { RecursivePartial } from "../../../../Types";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class Slow implements ISlow, IOptionLoader<ISlow> {
    get active(): boolean;
    set active(_value: boolean);
    factor: number;
    radius: number;
    constructor();
    load(data?: RecursivePartial<ISlow>): void;
}
