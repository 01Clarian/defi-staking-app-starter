import { ITiltAnimation } from "./ITiltAnimation";
import { TiltDirection, TiltDirectionAlt } from "../../../../Enums";
import { IValueWithRandom } from "../../IValueWithRandom";
export interface ITilt extends IValueWithRandom {
    animation: ITiltAnimation;
    direction: TiltDirection | keyof typeof TiltDirection | TiltDirectionAlt;
    enable: boolean;
}
