import { IDestroy } from "../../../Interfaces/Particles/Destroy/IDestroy";
import { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import { DestroyMode } from "../../../../Enums";
import { RecursivePartial } from "../../../../Types";
import { Split } from "./Split";
export declare class Destroy implements IDestroy, IOptionLoader<IDestroy> {
    mode: DestroyMode;
    split: Split;
    constructor();
    load(data?: RecursivePartial<IDestroy>): void;
}
