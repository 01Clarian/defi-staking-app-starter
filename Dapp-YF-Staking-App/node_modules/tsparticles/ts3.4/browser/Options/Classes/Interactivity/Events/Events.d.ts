import { IEvents } from "../../../Interfaces/Interactivity/Events/IEvents";
import { ClickEvent } from "./ClickEvent";
import { DivEvent } from "./DivEvent";
import { HoverEvent } from "./HoverEvent";
import { RecursivePartial, SingleOrMultiple } from "../../../../Types";
import { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class Events implements IEvents, IOptionLoader<IEvents> {
    onclick: ClickEvent;
    ondiv: SingleOrMultiple<DivEvent>;
    onhover: HoverEvent;
    onClick: ClickEvent;
    onDiv: SingleOrMultiple<DivEvent>;
    onHover: HoverEvent;
    resize: boolean;
    constructor();
    load(data?: RecursivePartial<IEvents>): void;
}
