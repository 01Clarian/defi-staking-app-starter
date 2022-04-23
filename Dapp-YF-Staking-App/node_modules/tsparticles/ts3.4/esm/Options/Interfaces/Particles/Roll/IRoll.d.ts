import { RangeValue, SingleOrMultiple } from "../../../../Types";
import { IColor } from "../../../../Core/Interfaces/Colors";
import { IRollLight } from "./IRollLight";
export interface IRoll {
    backColor?: SingleOrMultiple<string> | IColor;
    darken: IRollLight;
    enable: boolean;
    enlighten: IRollLight;
    speed: RangeValue;
}
