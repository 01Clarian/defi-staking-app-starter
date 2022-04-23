import type { ITrail } from "../../../Interfaces/Interactivity/Modes/ITrail";
import type { IParticles } from "../../../Interfaces/Particles/IParticles";
import type { RecursivePartial } from "../../../../Types";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class Trail implements ITrail, IOptionLoader<ITrail> {
    delay: number;
    particles?: RecursivePartial<IParticles>;
    pauseOnStop: boolean;
    quantity: number;
    constructor();
    load(data?: RecursivePartial<ITrail>): void;
}
