import type { IDrawStroke } from "./IDrawStroke";
import type { IColor } from "../../../../Core/Interfaces/Colors";
export interface IDraw {
    enable: boolean;
    lineColor: string | IColor;
    lineWidth: number;
    stroke: IDrawStroke;
}
