import type { IAbsorberSize } from "../Interfaces/IAbsorberSize";
import type { RecursivePartial } from "../../../../Types";
import type { IOptionLoader } from "../../../../Options/Interfaces/IOptionLoader";
import { ValueWithRandom } from "../../../../Options/Classes/ValueWithRandom";
export declare class AbsorberSize extends ValueWithRandom implements IAbsorberSize, IOptionLoader<IAbsorberSize> {
    density: number;
    limit?: number;
    constructor();
    load(data?: RecursivePartial<IAbsorberSize>): void;
}
