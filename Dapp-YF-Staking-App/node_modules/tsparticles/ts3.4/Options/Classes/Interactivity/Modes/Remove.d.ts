import { IRemove } from "../../../Interfaces/Interactivity/Modes/IRemove";
import { RecursivePartial } from "../../../../Types";
import { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class Remove implements IRemove, IOptionLoader<IRemove> {
    particles_nb: number;
    quantity: number;
    constructor();
    load(data?: RecursivePartial<IRemove>): void;
}
