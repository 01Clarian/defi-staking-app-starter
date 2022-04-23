import type { IMotion } from "../../Interfaces/Motion/IMotion";
import type { IOptionLoader } from "../../Interfaces/IOptionLoader";
import type { RecursivePartial } from "../../../Types";
import { MotionReduce } from "./MotionReduce";
export declare class Motion implements IMotion, IOptionLoader<IMotion> {
    disable: boolean;
    reduce: MotionReduce;
    constructor();
    load(data?: RecursivePartial<IMotion>): void;
}
