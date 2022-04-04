import { RecursivePartial } from "../../../Types";
import { OptionsColor } from "../OptionsColor";
import { IBackgroundMaskCover } from "../../Interfaces/BackgroundMask/IBackgroundMaskCover";
import { IOptionLoader } from "../../Interfaces/IOptionLoader";
export declare class BackgroundMaskCover implements IBackgroundMaskCover, IOptionLoader<IBackgroundMaskCover> {
    color: OptionsColor;
    opacity: number;
    constructor();
    load(data?: RecursivePartial<IBackgroundMaskCover> | undefined): void;
}
