import { IRepulse } from "../../../Interfaces/Interactivity/Modes/IRepulse";
import { RecursivePartial, SingleOrMultiple } from "../../../../Types";
import { RepulseDiv } from "./RepulseDiv";
import { RepulseBase } from "./RepulseBase";
import { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class Repulse extends RepulseBase implements IRepulse, IOptionLoader<IRepulse> {
    divs?: SingleOrMultiple<RepulseDiv>;
    load(data?: RecursivePartial<IRepulse>): void;
}
