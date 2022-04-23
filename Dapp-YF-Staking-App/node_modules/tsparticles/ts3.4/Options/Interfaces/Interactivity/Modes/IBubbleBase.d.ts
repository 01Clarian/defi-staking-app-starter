import { SingleOrMultiple } from "../../../../Types";
import { IColor } from "../../../../Core/Interfaces/Colors";
export interface IBubbleBase {
    color?: SingleOrMultiple<IColor | string>;
    distance: number;
    duration: number;
    opacity?: number;
    size?: number;
}
