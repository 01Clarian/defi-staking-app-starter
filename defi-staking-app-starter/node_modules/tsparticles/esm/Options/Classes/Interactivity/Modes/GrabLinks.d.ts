import type { IGrabLinks } from "../../../Interfaces/Interactivity/Modes/IGrabLinks";
import type { RecursivePartial } from "../../../../Types";
import { OptionsColor } from "../../OptionsColor";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class GrabLinks implements IGrabLinks, IOptionLoader<IGrabLinks> {
    blink: boolean;
    color?: OptionsColor;
    consent: boolean;
    opacity: number;
    constructor();
    load(data?: RecursivePartial<IGrabLinks>): void;
}
