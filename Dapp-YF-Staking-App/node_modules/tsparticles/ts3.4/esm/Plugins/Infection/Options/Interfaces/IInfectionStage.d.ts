import { IColor } from "../../../../Core/Interfaces";
export interface IInfectionStage {
    color: string | IColor;
    duration?: number;
    infectedStage?: number;
    radius: number;
    rate: number;
}
