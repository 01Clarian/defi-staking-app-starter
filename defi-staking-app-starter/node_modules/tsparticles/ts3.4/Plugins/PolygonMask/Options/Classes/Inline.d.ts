import { IInline } from "../Interfaces/IInline";
import { InlineArrangement, InlineArrangementAlt } from "../../Enums";
import { RecursivePartial } from "../../../../Types";
import { IOptionLoader } from "../../../../Options/Interfaces/IOptionLoader";
export declare class Inline implements IInline, IOptionLoader<IInline> {
    arrangement: InlineArrangement | keyof typeof InlineArrangement | InlineArrangementAlt;
    constructor();
    load(data?: RecursivePartial<IInline>): void;
}
