import { IDivEvent } from "../../../Interfaces/Interactivity/Events/IDivEvent";
import { DivMode, DivType } from "../../../../Enums";
import { RecursivePartial, SingleOrMultiple } from "../../../../Types";
import { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class DivEvent implements IDivEvent, IOptionLoader<IDivEvent> {
    elementId: SingleOrMultiple<string>;
    el: SingleOrMultiple<string>;
    ids: SingleOrMultiple<string>;
    selectors: SingleOrMultiple<string>;
    enable: boolean;
    mode: SingleOrMultiple<DivMode | keyof typeof DivMode | string>;
    type: DivType;
    constructor();
    load(data?: RecursivePartial<IDivEvent>): void;
}
