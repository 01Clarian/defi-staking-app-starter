import { IParticlesNumber } from "../../../Interfaces/Particles/Number/IParticlesNumber";
import { Density } from "./Density";
import { RecursivePartial } from "../../../../Types";
import { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class ParticlesNumber implements IParticlesNumber, IOptionLoader<IParticlesNumber> {
    max: number;
    density: Density;
    limit: number;
    value: number;
    constructor();
    load(data?: RecursivePartial<IParticlesNumber>): void;
}
