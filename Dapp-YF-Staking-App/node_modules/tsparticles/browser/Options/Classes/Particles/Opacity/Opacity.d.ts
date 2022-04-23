import type { IOpacity } from "../../../Interfaces/Particles/Opacity/IOpacity";
import { OpacityAnimation } from "./OpacityAnimation";
import type { RecursivePartial } from "../../../../Types";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import { ValueWithRandom } from "../../ValueWithRandom";
export declare class Opacity extends ValueWithRandom implements IOpacity, IOptionLoader<IOpacity> {
    get anim(): OpacityAnimation;
    set anim(value: OpacityAnimation);
    animation: OpacityAnimation;
    constructor();
    load(data?: RecursivePartial<IOpacity>): void;
}
