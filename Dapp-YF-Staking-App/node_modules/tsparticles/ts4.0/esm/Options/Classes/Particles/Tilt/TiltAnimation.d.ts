import type { RecursivePartial } from "../../../../Types";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import type { ITiltAnimation } from "../../../Interfaces/Particles/Tilt/ITiltAnimation";
export declare class TiltAnimation implements ITiltAnimation, IOptionLoader<ITiltAnimation> {
    enable: boolean;
    speed: number;
    sync: boolean;
    constructor();
    load(data?: RecursivePartial<ITiltAnimation>): void;
}
