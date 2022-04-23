import { IZIndex } from "../../../Interfaces/Particles/ZIndex/IZIndex";
import { RecursivePartial } from "../../../../Types";
import { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import { ValueWithRandom } from "../../ValueWithRandom";
export declare class ZIndex extends ValueWithRandom implements IZIndex, IOptionLoader<IZIndex> {
    opacityRate: number;
    sizeRate: number;
    velocityRate: number;
    constructor();
    load(data?: RecursivePartial<IZIndex>): void;
}
