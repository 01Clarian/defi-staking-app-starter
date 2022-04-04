import { IInfection } from "../Interfaces/IInfection";
import { InfectionStage } from "./InfectionStage";
import { RecursivePartial } from "../../../../Types";
import { IOptionLoader } from "../../../../Options/Interfaces/IOptionLoader";
export declare class Infection implements IInfection, IOptionLoader<IInfection> {
    cure: boolean;
    delay: number;
    enable: boolean;
    infections: number;
    stages: InfectionStage[];
    constructor();
    load(data?: RecursivePartial<IInfection>): void;
}
