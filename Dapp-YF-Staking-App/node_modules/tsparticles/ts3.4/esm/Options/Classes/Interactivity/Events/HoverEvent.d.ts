import { IHoverEvent } from "../../../Interfaces/Interactivity/Events/IHoverEvent";
import { HoverMode } from "../../../../Enums";
import { Parallax } from "./Parallax";
import { RecursivePartial, SingleOrMultiple } from "../../../../Types";
import { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class HoverEvent implements IHoverEvent, IOptionLoader<IHoverEvent> {
    enable: boolean;
    mode: SingleOrMultiple<HoverMode | keyof typeof HoverMode | string>;
    parallax: Parallax;
    constructor();
    load(data?: RecursivePartial<IHoverEvent>): void;
}
