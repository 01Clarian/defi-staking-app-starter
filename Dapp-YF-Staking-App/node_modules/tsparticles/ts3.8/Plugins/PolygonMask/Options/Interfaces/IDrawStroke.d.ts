import type { IColor } from "../../../../Core/Interfaces/Colors";
export interface IDrawStroke {
    color: string | IColor;
    width: number;
    opacity: number;
}
