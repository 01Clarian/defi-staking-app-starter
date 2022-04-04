import { RecursivePartial, SingleOrMultiple } from "../../../../Types";
import { IRepulseDiv } from "../../../Interfaces/Interactivity/Modes/IRepulseDiv";
import { RepulseBase } from "./RepulseBase";
import { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class RepulseDiv extends RepulseBase implements IRepulseDiv, IOptionLoader<IRepulseDiv> {
    ids: SingleOrMultiple<string>;
    selectors: SingleOrMultiple<string>;
    constructor();
    load(data?: RecursivePartial<IRepulseDiv>): void;
}
