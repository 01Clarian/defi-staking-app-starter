import { IRotateAnimation } from "../../../Interfaces/Particles/Rotate/IRotateAnimation";
import { RecursivePartial } from "../../../../Types";
import { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class RotateAnimation implements IRotateAnimation, IOptionLoader<IRotateAnimation> {
    enable: boolean;
    speed: number;
    sync: boolean;
    constructor();
    load(data?: RecursivePartial<IRotateAnimation>): void;
}
