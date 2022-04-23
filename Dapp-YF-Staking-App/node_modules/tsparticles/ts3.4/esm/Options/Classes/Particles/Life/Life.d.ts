import { ILife } from "../../../Interfaces/Particles/Life/ILife";
import { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import { RecursivePartial } from "../../../../Types";
import { LifeDelay } from "./LifeDelay";
import { LifeDuration } from "./LifeDuration";
export declare class Life implements ILife, IOptionLoader<ILife> {
    count: number;
    delay: LifeDelay;
    duration: LifeDuration;
    constructor();
    load(data?: RecursivePartial<ILife>): void;
}
