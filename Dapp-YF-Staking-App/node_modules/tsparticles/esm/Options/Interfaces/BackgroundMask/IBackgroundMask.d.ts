import type { IColor } from "../../../Core/Interfaces/Colors";
import type { IBackgroundMaskCover } from "./IBackgroundMaskCover";
export interface IBackgroundMask {
    composite: string;
    cover: IBackgroundMaskCover | IColor | string;
    enable: boolean;
}
