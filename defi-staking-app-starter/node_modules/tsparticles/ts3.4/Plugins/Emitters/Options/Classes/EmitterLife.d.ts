import { IEmitterLife } from "../Interfaces/IEmitterLife";
import { RecursivePartial } from "../../../../Types";
import { IOptionLoader } from "../../../../Options/Interfaces/IOptionLoader";
export declare class EmitterLife implements IEmitterLife, IOptionLoader<IEmitterLife> {
    count?: number;
    delay?: number;
    duration?: number;
    load(data?: RecursivePartial<IEmitterLife>): void;
}
