import { ClickMode } from "../../../../Enums";
import { SingleOrMultiple } from "../../../../Types";
export interface IClickEvent {
    enable: boolean;
    mode: SingleOrMultiple<ClickMode | keyof typeof ClickMode | string>;
}
