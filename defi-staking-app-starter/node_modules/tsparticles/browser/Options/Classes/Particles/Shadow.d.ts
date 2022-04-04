import type { IShadow } from "../../Interfaces/Particles/IShadow";
import type { ICoordinates } from "../../../Core/Interfaces/ICoordinates";
import type { RecursivePartial } from "../../../Types";
import { OptionsColor } from "../OptionsColor";
import type { IOptionLoader } from "../../Interfaces/IOptionLoader";
export declare class Shadow implements IShadow, IOptionLoader<IShadow> {
    blur: number;
    color: OptionsColor;
    enable: boolean;
    offset: ICoordinates;
    constructor();
    load(data?: RecursivePartial<IShadow>): void;
}
