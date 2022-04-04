import { IDrawStroke } from "./IDrawStroke";
import { IColor } from "../../../../Core/Interfaces/Colors";
export interface IDraw {
    enable: boolean;
    lineColor: string | IColor;
    lineWidth: number;
    stroke: IDrawStroke;
}
