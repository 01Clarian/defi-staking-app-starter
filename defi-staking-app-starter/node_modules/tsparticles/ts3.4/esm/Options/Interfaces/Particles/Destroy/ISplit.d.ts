import { IValueWithRandom } from "../../IValueWithRandom";
import { RecursivePartial } from "../../../../Types";
import { IParticles } from "../IParticles";
export interface ISplit {
    count: number;
    factor: IValueWithRandom;
    particles?: RecursivePartial<IParticles>;
    rate: IValueWithRandom;
    sizeOffset: boolean;
}
