import type { IManualParticle } from "../Interfaces/IManualParticle";
import type { IOptionLoader } from "../Interfaces/IOptionLoader";
import type { RecursivePartial } from "../../Types";
import type { IParticles } from "../Interfaces/Particles/IParticles";
import type { ICoordinates } from "../../Core/Interfaces/ICoordinates";
export declare class ManualParticle implements IManualParticle, IOptionLoader<IManualParticle> {
    options?: RecursivePartial<IParticles>;
    position?: ICoordinates;
    load(data?: RecursivePartial<IManualParticle>): void;
}
