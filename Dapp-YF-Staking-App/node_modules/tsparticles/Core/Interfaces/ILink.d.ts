import type { IParticle } from "./IParticle";
export interface ILink {
    destination: IParticle;
    opacity: number;
}
export interface ILinkTriangle {
    vertices: IParticle[];
    opacity: number;
}
