import { IShadow } from "../../Interfaces/Particles/IShadow";
import { ICoordinates } from "../../../Core/Interfaces/ICoordinates";
import { RecursivePartial } from "../../../Types";
import { OptionsColor } from "../OptionsColor";
import { IOptionLoader } from "../../Interfaces/IOptionLoader";
export declare class Shadow implements IShadow, IOptionLoader<IShadow> {
    blur: number;
    color: OptionsColor;
    enable: boolean;
    offset: ICoordinates;
    constructor();
    load(data?: RecursivePartial<IShadow>): void;
}
