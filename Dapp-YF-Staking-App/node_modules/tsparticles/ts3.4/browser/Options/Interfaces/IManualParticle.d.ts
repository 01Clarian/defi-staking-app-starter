import { ICoordinates } from "../../Core/Interfaces/ICoordinates";
import { IParticles } from "./Particles/IParticles";
import { RecursivePartial } from "../../Types";
export interface IManualParticle {
    position?: ICoordinates;
    options?: RecursivePartial<IParticles>;
}
