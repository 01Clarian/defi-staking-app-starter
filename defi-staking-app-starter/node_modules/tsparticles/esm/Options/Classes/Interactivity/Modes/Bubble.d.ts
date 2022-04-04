import type { IBubble } from "../../../Interfaces/Interactivity/Modes/IBubble";
import type { RecursivePartial, SingleOrMultiple } from "../../../../Types";
import { BubbleDiv } from "./BubbleDiv";
import { BubbleBase } from "./BubbleBase";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class Bubble extends BubbleBase implements IBubble, IOptionLoader<IBubble> {
    divs?: SingleOrMultiple<BubbleDiv>;
    load(data?: RecursivePartial<IBubble>): void;
}
