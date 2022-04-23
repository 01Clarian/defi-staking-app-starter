import type { IEvents } from "../../../Interfaces/Interactivity/Events/IEvents";
import { ClickEvent } from "./ClickEvent";
import { DivEvent } from "./DivEvent";
import { HoverEvent } from "./HoverEvent";
import type { RecursivePartial, SingleOrMultiple } from "../../../../Types";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class Events implements IEvents, IOptionLoader<IEvents> {
    get onclick(): ClickEvent;
    set onclick(value: ClickEvent);
    get ondiv(): SingleOrMultiple<DivEvent>;
    set ondiv(value: SingleOrMultiple<DivEvent>);
    get onhover(): HoverEvent;
    set onhover(value: HoverEvent);
    onClick: ClickEvent;
    onDiv: SingleOrMultiple<DivEvent>;
    onHover: HoverEvent;
    resize: boolean;
    constructor();
    load(data?: RecursivePartial<IEvents>): void;
}
