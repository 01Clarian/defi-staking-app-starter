import type { IBounce } from "../../../Interfaces/Particles/Bounce/IBounce";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import type { RecursivePartial } from "../../../../Types";
import { BounceFactor } from "./BounceFactor";
export declare class Bounce implements IBounce, IOptionLoader<IBounce> {
    horizontal: BounceFactor;
    vertical: BounceFactor;
    constructor();
    load(data?: RecursivePartial<IBounce>): void;
}
