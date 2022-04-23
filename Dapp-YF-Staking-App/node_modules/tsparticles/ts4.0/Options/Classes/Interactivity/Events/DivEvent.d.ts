import type { IDivEvent } from "../../../Interfaces/Interactivity/Events/IDivEvent";
import { DivMode, DivType } from "../../../../Enums";
import type { RecursivePartial, SingleOrMultiple } from "../../../../Types";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class DivEvent implements IDivEvent, IOptionLoader<IDivEvent> {
    get elementId(): SingleOrMultiple<string>;
    set elementId(value: SingleOrMultiple<string>);
    get el(): SingleOrMultiple<string>;
    set el(value: SingleOrMultiple<string>);
    get ids(): SingleOrMultiple<string>;
    set ids(value: SingleOrMultiple<string>);
    selectors: SingleOrMultiple<string>;
    enable: boolean;
    mode: SingleOrMultiple<DivMode | keyof typeof DivMode | string>;
    type: DivType;
    constructor();
    load(data?: RecursivePartial<IDivEvent>): void;
}
