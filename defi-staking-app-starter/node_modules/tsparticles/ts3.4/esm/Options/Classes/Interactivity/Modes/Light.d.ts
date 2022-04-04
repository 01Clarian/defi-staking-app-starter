import { ILight } from "../../../Interfaces/Interactivity/Modes/ILight";
import { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import { RecursivePartial } from "../../../../Types";
import { LightArea } from "./LightArea";
import { LightShadow } from "./LightShadow";
export declare class Light implements ILight, IOptionLoader<ILight> {
    area: LightArea;
    shadow: LightShadow;
    constructor();
    load(data?: RecursivePartial<ILight>): void;
}
