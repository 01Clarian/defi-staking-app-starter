import type { RecursivePartial, SingleOrMultiple } from "../../../../Types";
import type { IBubbleDiv } from "../../../Interfaces/Interactivity/Modes/IBubbleDiv";
import { BubbleBase } from "./BubbleBase";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class BubbleDiv extends BubbleBase implements IBubbleDiv, IOptionLoader<IBubbleDiv> {
    get ids(): SingleOrMultiple<string>;
    set ids(value: SingleOrMultiple<string>);
    selectors: SingleOrMultiple<string>;
    constructor();
    load(data?: RecursivePartial<IBubbleDiv>): void;
}
