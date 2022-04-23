import { IClickEvent } from "./IClickEvent";
import { IHoverEvent } from "./IHoverEvent";
import { IDivEvent } from "./IDivEvent";
import { SingleOrMultiple } from "../../../../Types";
export interface IEvents {
    onclick: IClickEvent;
    onhover: IHoverEvent;
    ondiv: SingleOrMultiple<IDivEvent>;
    onClick: IClickEvent;
    onHover: IHoverEvent;
    onDiv: SingleOrMultiple<IDivEvent>;
    resize: boolean;
}
