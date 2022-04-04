import { ISizeAnimation } from "./ISizeAnimation";
import { IValueWithRandom } from "../../IValueWithRandom";
export interface ISize extends IValueWithRandom {
    anim: ISizeAnimation;
    animation: ISizeAnimation;
}
