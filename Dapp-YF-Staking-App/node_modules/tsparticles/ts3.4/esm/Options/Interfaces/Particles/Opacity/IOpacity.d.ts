import { IOpacityAnimation } from "./IOpacityAnimation";
import { IValueWithRandom } from "../../IValueWithRandom";
export interface IOpacity extends IValueWithRandom {
    anim: IOpacityAnimation;
    animation: IOpacityAnimation;
}
