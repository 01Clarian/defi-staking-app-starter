import type { RecursivePartial, SingleOrMultiple } from "../../../../Types";
import type { IRepulseDiv } from "../../../Interfaces/Interactivity/Modes/IRepulseDiv";
import { RepulseBase } from "./RepulseBase";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class RepulseDiv extends RepulseBase implements IRepulseDiv, IOptionLoader<IRepulseDiv> {
    get ids(): SingleOrMultiple<string>;
    set ids(value: SingleOrMultiple<string>);
    selectors: SingleOrMultiple<string>;
    constructor();
    load(data?: RecursivePartial<IRepulseDiv>): void;
}
