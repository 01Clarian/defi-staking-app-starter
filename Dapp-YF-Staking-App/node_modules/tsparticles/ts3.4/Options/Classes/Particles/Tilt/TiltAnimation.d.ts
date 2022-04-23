import { RecursivePartial } from "../../../../Types";
import { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import { ITiltAnimation } from "../../../Interfaces/Particles/Tilt/ITiltAnimation";
export declare class TiltAnimation implements ITiltAnimation, IOptionLoader<ITiltAnimation> {
    enable: boolean;
    speed: number;
    sync: boolean;
    constructor();
    load(data?: RecursivePartial<ITiltAnimation>): void;
}
