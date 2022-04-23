import { IBackgroundMask } from "../../Interfaces/BackgroundMask/IBackgroundMask";
import { RecursivePartial } from "../../../Types";
import { BackgroundMaskCover } from "./BackgroundMaskCover";
import { IOptionLoader } from "../../Interfaces/IOptionLoader";
export declare class BackgroundMask implements IBackgroundMask, IOptionLoader<IBackgroundMask> {
    composite: string;
    cover: BackgroundMaskCover;
    enable: boolean;
    constructor();
    load(data?: RecursivePartial<IBackgroundMask>): void;
}
