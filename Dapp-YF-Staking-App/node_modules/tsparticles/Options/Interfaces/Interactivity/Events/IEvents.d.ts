import type { IClickEvent } from "./IClickEvent";
import type { IHoverEvent } from "./IHoverEvent";
import type { IDivEvent } from "./IDivEvent";
import type { SingleOrMultiple } from "../../../../Types";
export interface IEvents {
    onclick: IClickEvent;
    onhover: IHoverEvent;
    ondiv: SingleOrMultiple<IDivEvent>;
    onClick: IClickEvent;
    onHover: IHoverEvent;
    onDiv: SingleOrMultiple<IDivEvent>;
    resize: boolean;
}
