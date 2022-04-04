import type { IInline } from "../Interfaces/IInline";
import { InlineArrangement, InlineArrangementAlt } from "../../Enums";
import type { RecursivePartial } from "../../../../Types";
import type { IOptionLoader } from "../../../../Options/Interfaces/IOptionLoader";
export declare class Inline implements IInline, IOptionLoader<IInline> {
    arrangement: InlineArrangement | keyof typeof InlineArrangement | InlineArrangementAlt;
    constructor();
    load(data?: RecursivePartial<IInline>): void;
}
