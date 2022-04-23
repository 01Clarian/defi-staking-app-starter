import { IDrawStroke } from "../Interfaces/IDrawStroke";
import { RecursivePartial } from "../../../../Types";
import { OptionsColor } from "../../../../Options/Classes/OptionsColor";
import { IOptionLoader } from "../../../../Options/Interfaces/IOptionLoader";
export declare class DrawStroke implements IDrawStroke, IOptionLoader<IDrawStroke> {
    color: OptionsColor;
    width: number;
    opacity: number;
    constructor();
    load(data?: RecursivePartial<IDrawStroke>): void;
}
