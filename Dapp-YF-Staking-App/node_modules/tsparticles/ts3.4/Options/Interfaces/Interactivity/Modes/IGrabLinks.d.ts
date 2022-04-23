import { IColor } from "../../../../Core/Interfaces/Colors";
export interface IGrabLinks {
    blink: boolean;
    color?: string | IColor;
    consent: boolean;
    opacity: number;
}
