import type { ILight } from "../../../Interfaces/Interactivity/Modes/ILight";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import type { RecursivePartial } from "../../../../Types";
import { LightArea } from "./LightArea";
import { LightShadow } from "./LightShadow";
export declare class Light implements ILight, IOptionLoader<ILight> {
    area: LightArea;
    shadow: LightShadow;
    constructor();
    load(data?: RecursivePartial<ILight>): void;
}
