import { IPush } from "../../../Interfaces/Interactivity/Modes/IPush";
import { RecursivePartial } from "../../../../Types";
import { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class Push implements IPush, IOptionLoader<IPush> {
    particles_nb: number;
    default: boolean;
    groups: string[];
    quantity: number;
    constructor();
    load(data?: RecursivePartial<IPush>): void;
}
