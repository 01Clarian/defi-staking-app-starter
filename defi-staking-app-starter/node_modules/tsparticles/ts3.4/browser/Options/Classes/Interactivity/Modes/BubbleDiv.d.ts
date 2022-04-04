import { RecursivePartial, SingleOrMultiple } from "../../../../Types";
import { IBubbleDiv } from "../../../Interfaces/Interactivity/Modes/IBubbleDiv";
import { BubbleBase } from "./BubbleBase";
import { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class BubbleDiv extends BubbleBase implements IBubbleDiv, IOptionLoader<IBubbleDiv> {
    ids: SingleOrMultiple<string>;
    selectors: SingleOrMultiple<string>;
    constructor();
    load(data?: RecursivePartial<IBubbleDiv>): void;
}
