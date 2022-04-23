import { IStroke } from "../../Interfaces/Particles/IStroke";
import { RecursivePartial } from "../../../Types";
import { AnimatableColor } from "./AnimatableColor";
import { IOptionLoader } from "../../Interfaces/IOptionLoader";
export declare class Stroke implements IStroke, IOptionLoader<IStroke> {
    color?: AnimatableColor;
    width: number;
    opacity?: number;
    constructor();
    load(data?: RecursivePartial<IStroke>): void;
}
