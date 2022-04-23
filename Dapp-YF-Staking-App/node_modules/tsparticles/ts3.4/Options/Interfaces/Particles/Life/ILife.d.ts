import { ILifeDelay } from "./ILifeDelay";
import { ILifeDuration } from "./ILifeDuration";
export interface ILife {
    count: number;
    delay: ILifeDelay;
    duration: ILifeDuration;
}
