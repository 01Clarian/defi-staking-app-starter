import { IAttract } from "../../../Interfaces/Interactivity/Modes/IAttract";
import { RecursivePartial } from "../../../../Types";
import { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import { EasingType } from "../../../../Enums";
export declare class Attract implements IAttract, IOptionLoader<IAttract> {
    distance: number;
    duration: number;
    easing: EasingType;
    factor: number;
    maxSpeed: number;
    speed: number;
    constructor();
    load(data?: RecursivePartial<IAttract>): void;
}
