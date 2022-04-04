import { HoverMode } from "../../../../Enums";
import { IParallax } from "./IParallax";
import { SingleOrMultiple } from "../../../../Types";
export interface IHoverEvent {
    enable: boolean;
    mode: SingleOrMultiple<HoverMode | keyof typeof HoverMode | string>;
    parallax: IParallax;
}
