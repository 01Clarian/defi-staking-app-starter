import type { IMotionReduce } from "../../Interfaces/Motion/IMotionReduce";
import type { IOptionLoader } from "../../Interfaces/IOptionLoader";
import type { RecursivePartial } from "../../../Types";
export declare class MotionReduce implements IMotionReduce, IOptionLoader<IMotionReduce> {
    factor: number;
    value: boolean;
    constructor();
    load(data?: RecursivePartial<IMotionReduce>): void;
}
