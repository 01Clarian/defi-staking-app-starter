import { IMotion } from "../../Interfaces/Motion/IMotion";
import { IOptionLoader } from "../../Interfaces/IOptionLoader";
import { RecursivePartial } from "../../../Types";
import { MotionReduce } from "./MotionReduce";
export declare class Motion implements IMotion, IOptionLoader<IMotion> {
    disable: boolean;
    reduce: MotionReduce;
    constructor();
    load(data?: RecursivePartial<IMotion>): void;
}
