import type { ISize } from "../../../Interfaces/Particles/Size/ISize";
import { SizeAnimation } from "./SizeAnimation";
import type { RecursivePartial } from "../../../../Types";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import { ValueWithRandom } from "../../ValueWithRandom";
export declare class Size extends ValueWithRandom implements ISize, IOptionLoader<ISize> {
    get anim(): SizeAnimation;
    set anim(value: SizeAnimation);
    animation: SizeAnimation;
    constructor();
    load(data?: RecursivePartial<ISize>): void;
}
