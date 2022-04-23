import { IGrab } from "../../../Interfaces/Interactivity/Modes/IGrab";
import { GrabLinks } from "./GrabLinks";
import { RecursivePartial } from "../../../../Types";
import { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class Grab implements IGrab, IOptionLoader<IGrab> {
    line_linked: GrabLinks;
    lineLinked: GrabLinks;
    distance: number;
    links: GrabLinks;
    constructor();
    load(data?: RecursivePartial<IGrab>): void;
}
