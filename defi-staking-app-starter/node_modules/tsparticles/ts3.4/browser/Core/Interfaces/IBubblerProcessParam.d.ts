import { ProcessBubbleType } from "../../Enums";
import { IBubblerProcessParamObj } from "./IBubblerProcessParamObj";
export interface IBubblerProcessParam {
    bubbleObj: IBubblerProcessParamObj;
    particlesObj: IBubblerProcessParamObj;
    type: ProcessBubbleType;
}
