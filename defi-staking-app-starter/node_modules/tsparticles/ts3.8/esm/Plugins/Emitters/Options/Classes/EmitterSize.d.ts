import type { IEmitterSize } from "../Interfaces/IEmitterSize";
import type { RecursivePartial } from "../../../../Types";
import { SizeMode } from "../../../../Enums";
import type { IOptionLoader } from "../../../../Options/Interfaces/IOptionLoader";
export declare class EmitterSize implements IEmitterSize, IOptionLoader<IEmitterSize> {
    mode: SizeMode | keyof typeof SizeMode;
    height: number;
    width: number;
    constructor();
    load(data?: RecursivePartial<IEmitterSize>): void;
}
