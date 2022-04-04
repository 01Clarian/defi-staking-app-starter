import type { IDraw } from "../Interfaces/IDraw";
import { DrawStroke } from "./DrawStroke";
import type { RecursivePartial } from "../../../../Types";
import { OptionsColor } from "../../../../Options/Classes/OptionsColor";
import type { IOptionLoader } from "../../../../Options/Interfaces/IOptionLoader";
export declare class Draw implements IDraw, IOptionLoader<IDraw> {
    get lineWidth(): number;
    set lineWidth(value: number);
    get lineColor(): string | OptionsColor;
    set lineColor(value: string | OptionsColor);
    enable: boolean;
    stroke: DrawStroke;
    constructor();
    load(data?: RecursivePartial<IDraw>): void;
}
