import { SingleOrMultiple } from "../../../../Types";
import { IBubbleDiv } from "./IBubbleDiv";
import { IBubbleBase } from "./IBubbleBase";
export interface IBubble extends IBubbleBase {
    divs?: SingleOrMultiple<IBubbleDiv>;
}
