import { IAbsorberSize } from "../Interfaces/IAbsorberSize";
import { RecursivePartial } from "../../../../Types";
import { IOptionLoader } from "../../../../Options/Interfaces/IOptionLoader";
import { ValueWithRandom } from "../../../../Options/Classes/ValueWithRandom";
export declare class AbsorberSize extends ValueWithRandom implements IAbsorberSize, IOptionLoader<IAbsorberSize> {
    density: number;
    limit?: number;
    constructor();
    load(data?: RecursivePartial<IAbsorberSize>): void;
}
