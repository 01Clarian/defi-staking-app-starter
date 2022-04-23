import { IHsl } from "./Colors";
export interface IBubbleParticleData {
    inRange: boolean;
    opacity?: number;
    radius?: number;
    color?: IHsl;
    div?: HTMLElement;
}
