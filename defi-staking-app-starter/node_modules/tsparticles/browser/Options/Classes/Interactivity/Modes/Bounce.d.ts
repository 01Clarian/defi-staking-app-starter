import type { IBounce } from "../../../Interfaces/Interactivity/Modes/IBounce";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import type { RecursivePartial } from "../../../../Types";
export declare class Bounce implements IBounce, IOptionLoader<IBounce> {
    distance: number;
    constructor();
    load(data?: RecursivePartial<IBounce>): void;
}
