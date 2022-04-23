import { IColor } from "../../../Core/Interfaces/Colors";
import { IBackgroundMaskCover } from "./IBackgroundMaskCover";
export interface IBackgroundMask {
    composite: string;
    cover: IBackgroundMaskCover | IColor | string;
    enable: boolean;
}
