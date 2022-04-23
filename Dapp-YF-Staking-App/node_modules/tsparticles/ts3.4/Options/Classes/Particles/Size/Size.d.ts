import { ISize } from "../../../Interfaces/Particles/Size/ISize";
import { SizeAnimation } from "./SizeAnimation";
import { RecursivePartial } from "../../../../Types";
import { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import { ValueWithRandom } from "../../ValueWithRandom";
export declare class Size extends ValueWithRandom implements ISize, IOptionLoader<ISize> {
    anim: SizeAnimation;
    animation: SizeAnimation;
    constructor();
    load(data?: RecursivePartial<ISize>): void;
}
