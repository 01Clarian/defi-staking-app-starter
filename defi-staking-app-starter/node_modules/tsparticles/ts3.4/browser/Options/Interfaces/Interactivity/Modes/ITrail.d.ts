import { IParticles } from "../../Particles/IParticles";
import { RecursivePartial } from "../../../../Types";
export interface ITrail {
    delay: number;
    particles?: RecursivePartial<IParticles>;
    pauseOnStop: boolean;
    quantity: number;
}
