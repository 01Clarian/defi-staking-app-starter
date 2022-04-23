import type { IColor } from "../../../Core/Interfaces/Colors";
export interface IBackground {
    color: IColor | string;
    image: string;
    opacity: number;
    position: string;
    repeat: string;
    size: string;
}
