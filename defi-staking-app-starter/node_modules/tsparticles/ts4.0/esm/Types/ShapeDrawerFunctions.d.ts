import type { IParticle } from "../Core/Interfaces/IParticle";
import type { Container } from "../Core/Container";
import type { IDelta } from "../Core/Interfaces/IDelta";
export declare type ShapeDrawerDrawFunction = (context: CanvasRenderingContext2D, particle: IParticle, radius: number, opacity: number, delta: IDelta, pixelRatio: number) => void;
export declare type ShapeDrawerInitFunction = (container: Container) => Promise<void>;
export declare type ShapeDrawerParticleInitFunction = (container: Container, particle: IParticle) => void;
export declare type ShapeDrawerAfterEffectFunction = (context: CanvasRenderingContext2D, particle: IParticle, radius: number, opacity: number, delta: IDelta, pixelRatio: number) => void;
export declare type ShapeDrawerDestroyFunction = (container: Container) => void;
export declare type ShapeDrawerSidesCountFunction = (particle: IParticle) => number;
