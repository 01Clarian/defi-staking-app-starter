import { IOpacity } from "../../../Interfaces/Particles/Opacity/IOpacity";
import { OpacityAnimation } from "./OpacityAnimation";
import { RecursivePartial } from "../../../../Types";
import { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import { ValueWithRandom } from "../../ValueWithRandom";
export declare class Opacity extends ValueWithRandom implements IOpacity, IOptionLoader<IOpacity> {
    anim: OpacityAnimation;
    animation: OpacityAnimation;
    constructor();
    load(data?: RecursivePartial<IOpacity>): void;
}
