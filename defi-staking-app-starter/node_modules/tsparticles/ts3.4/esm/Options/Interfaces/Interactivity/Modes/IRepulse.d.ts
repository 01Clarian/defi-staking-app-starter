import { SingleOrMultiple } from "../../../../Types";
import { IRepulseDiv } from "./IRepulseDiv";
import { IRepulseBase } from "./IRepulseBase";
export interface IRepulse extends IRepulseBase {
    divs?: SingleOrMultiple<IRepulseDiv>;
}
