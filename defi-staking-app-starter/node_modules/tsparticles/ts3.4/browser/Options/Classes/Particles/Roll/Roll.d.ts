import { IRoll } from "../../../Interfaces/Particles/Roll/IRoll";
import { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import { RangeValue, RecursivePartial } from "../../../../Types";
import { OptionsColor } from "../../OptionsColor";
import { RollLight } from "./RollLight";
export declare class Roll implements IRoll, IOptionLoader<IRoll> {
    backColor?: OptionsColor;
    darken: RollLight;
    enable: boolean;
    enlighten: RollLight;
    speed: RangeValue;
    constructor();
    load(data?: RecursivePartial<IRoll>): void;
}
