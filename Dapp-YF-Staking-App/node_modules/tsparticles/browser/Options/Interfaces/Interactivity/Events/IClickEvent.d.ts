import type { ClickMode } from "../../../../Enums";
import type { SingleOrMultiple } from "../../../../Types";
export interface IClickEvent {
    enable: boolean;
    mode: SingleOrMultiple<ClickMode | keyof typeof ClickMode | string>;
}
