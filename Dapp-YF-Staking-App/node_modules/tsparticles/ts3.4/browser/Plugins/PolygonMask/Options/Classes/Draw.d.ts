import { IDraw } from "../Interfaces/IDraw";
import { DrawStroke } from "./DrawStroke";
import { RecursivePartial } from "../../../../Types";
import { OptionsColor } from "../../../../Options/Classes/OptionsColor";
import { IOptionLoader } from "../../../../Options/Interfaces/IOptionLoader";
export declare class Draw implements IDraw, IOptionLoader<IDraw> {
    lineWidth: number;
    lineColor: string | OptionsColor;
    enable: boolean;
    stroke: DrawStroke;
    constructor();
    load(data?: RecursivePartial<IDraw>): void;
}
