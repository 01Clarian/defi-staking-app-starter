import { ILightArea } from "./ILightArea";
import { ILightShadow } from "./ILightShadow";
export interface ILight {
    shadow: ILightShadow;
    area: ILightArea;
}
