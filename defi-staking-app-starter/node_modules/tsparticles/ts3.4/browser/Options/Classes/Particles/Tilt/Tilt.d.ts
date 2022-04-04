import { TiltAnimation } from "./TiltAnimation";
import { TiltDirection, TiltDirectionAlt } from "../../../../Enums";
import { RecursivePartial } from "../../../../Types";
import { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import { ValueWithRandom } from "../../ValueWithRandom";
import { ITilt } from "../../../Interfaces/Particles/Tilt/ITilt";
export declare class Tilt extends ValueWithRandom implements ITilt, IOptionLoader<ITilt> {
    animation: TiltAnimation;
    direction: TiltDirection | keyof typeof TiltDirection | TiltDirectionAlt;
    enable: boolean;
    constructor();
    load(data?: RecursivePartial<ITilt>): void;
}
