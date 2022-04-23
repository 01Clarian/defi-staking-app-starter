import { IMotionReduce } from "../../Interfaces/Motion/IMotionReduce";
import { IOptionLoader } from "../../Interfaces/IOptionLoader";
import { RecursivePartial } from "../../../Types";
export declare class MotionReduce implements IMotionReduce, IOptionLoader<IMotionReduce> {
    factor: number;
    value: boolean;
    constructor();
    load(data?: RecursivePartial<IMotionReduce>): void;
}
