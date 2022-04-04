import type { IRemove } from "../../../Interfaces/Interactivity/Modes/IRemove";
import type { RecursivePartial } from "../../../../Types";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class Remove implements IRemove, IOptionLoader<IRemove> {
    get particles_nb(): number;
    set particles_nb(value: number);
    quantity: number;
    constructor();
    load(data?: RecursivePartial<IRemove>): void;
}
