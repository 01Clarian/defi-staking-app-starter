import type { IValueWithRandom } from "../../../IValueWithRandom";
export interface IPath {
    clamp: boolean;
    delay: IValueWithRandom;
    enable: boolean;
    generator?: string;
}
