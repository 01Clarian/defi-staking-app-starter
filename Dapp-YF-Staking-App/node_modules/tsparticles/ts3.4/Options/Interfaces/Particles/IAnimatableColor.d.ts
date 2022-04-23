import { IOptionsColor } from "../IOptionsColor";
import { IColorAnimation } from "../IColorAnimation";
import { IHslAnimation } from "../IHslAnimation";
export interface IAnimatableColor extends IOptionsColor {
    animation: IColorAnimation | IHslAnimation;
}
