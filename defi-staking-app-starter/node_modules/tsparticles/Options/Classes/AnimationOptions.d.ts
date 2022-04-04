import { RecursivePartial } from "../../Types";
import { IOptionLoader } from "../Interfaces/IOptionLoader";
import { IAnimation } from "../Interfaces/IAnimation";
export declare class AnimationOptions implements IAnimation, IOptionLoader<IAnimation> {
    count: number;
    enable: boolean;
    speed: number;
    sync: boolean;
    constructor();
    load(data?: RecursivePartial<IAnimation>): void;
}
