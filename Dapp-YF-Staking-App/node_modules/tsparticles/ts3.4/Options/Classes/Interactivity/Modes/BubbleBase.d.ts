import { IBubbleBase } from "../../../Interfaces/Interactivity/Modes/IBubbleBase";
import { RecursivePartial, SingleOrMultiple } from "../../../../Types";
import { OptionsColor } from "../../OptionsColor";
export declare abstract class BubbleBase implements IBubbleBase {
    distance: number;
    duration: number;
    opacity?: number;
    size?: number;
    color?: SingleOrMultiple<OptionsColor>;
    constructor();
    load(data?: RecursivePartial<IBubbleBase>): void;
}
