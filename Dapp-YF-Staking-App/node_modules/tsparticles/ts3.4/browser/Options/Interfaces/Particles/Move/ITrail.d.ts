import { IColor } from "../../../../Core/Interfaces/Colors";
export interface ITrail {
    fillColor: string | IColor;
    enable: boolean;
    length: number;
}
