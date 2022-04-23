import type { IColor } from "../../../../Core/Interfaces/Colors";
export interface ITwinkleValues {
    color?: string | IColor;
    enable: boolean;
    frequency: number;
    opacity: number;
}
