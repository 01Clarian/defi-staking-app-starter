import { IAnimatableColor } from "./IAnimatableColor";
import { IColor } from "../../../Core/Interfaces/Colors";
export interface IStroke {
    color?: string | IAnimatableColor | IColor;
    opacity?: number;
    width: number;
}
