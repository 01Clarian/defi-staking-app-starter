import type { IOptionsColor } from "../IOptionsColor";
import type { IColorAnimation } from "../IColorAnimation";
import type { IHslAnimation } from "../IHslAnimation";
export interface IAnimatableColor extends IOptionsColor {
    animation: IColorAnimation | IHslAnimation;
}
