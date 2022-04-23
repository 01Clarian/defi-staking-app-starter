import { IBounce } from "../../../Interfaces/Interactivity/Modes/IBounce";
import { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import { RecursivePartial } from "../../../../Types";
export declare class Bounce implements IBounce, IOptionLoader<IBounce> {
    distance: number;
    constructor();
    load(data?: RecursivePartial<IBounce>): void;
}
