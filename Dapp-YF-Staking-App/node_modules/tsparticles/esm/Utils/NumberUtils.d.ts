import type { IValueWithRandom } from "../Options/Interfaces/IValueWithRandom";
import type { ICoordinates } from "../Core/Interfaces/ICoordinates";
import { EasingType, MoveDirection, MoveDirectionAlt } from "../Enums";
import type { IVelocity } from "../Core/Interfaces/IVelocity";
import { RangeValue } from "../Types";
import { Vector } from "../Core/Particle/Vector";
export declare function clamp(num: number, min: number, max: number): number;
export declare function mix(comp1: number, comp2: number, weight1: number, weight2: number): number;
export declare function randomInRange(r: RangeValue): number;
export declare function getRangeValue(value: RangeValue): number;
export declare function getRangeMin(value: RangeValue): number;
export declare function getRangeMax(value: RangeValue): number;
export declare function setRangeValue(source: RangeValue, value?: number): RangeValue;
export declare function getValue(options: IValueWithRandom): number;
export declare function getDistances(pointA: ICoordinates, pointB: ICoordinates): {
    dx: number;
    dy: number;
    distance: number;
};
export declare function getDistance(pointA: ICoordinates, pointB: ICoordinates): number;
export declare function getParticleDirectionAngle(direction: MoveDirection | keyof typeof MoveDirection | MoveDirectionAlt | number): number;
export declare function getParticleBaseVelocity(direction: number): Vector;
export declare function rotateVelocity(velocity: IVelocity, angle: number): IVelocity;
export declare function collisionVelocity(v1: Vector, v2: Vector, m1: number, m2: number): Vector;
export declare function calcEasing(value: number, type: EasingType): number;
export declare class NumberUtils {
    static clamp(num: number, min: number, max: number): number;
    static mix(comp1: number, comp2: number, weight1: number, weight2: number): number;
    static randomInRange(r: RangeValue): number;
    static getRangeValue(value: RangeValue): number;
    static getRangeMin(value: RangeValue): number;
    static getRangeMax(value: RangeValue): number;
    static setRangeValue(source: RangeValue, value?: number): RangeValue;
    static getValue(options: IValueWithRandom): number;
    static getDistances(pointA: ICoordinates, pointB: ICoordinates): {
        dx: number;
        dy: number;
        distance: number;
    };
    static getDistance(pointA: ICoordinates, pointB: ICoordinates): number;
    static getParticleDirectionAngle(direction: MoveDirection | keyof typeof MoveDirection | MoveDirectionAlt | number): number;
    static getParticleBaseVelocity(direction: number): Vector;
    static rotateVelocity(velocity: IVelocity, angle: number): IVelocity;
    static collisionVelocity(v1: Vector, v2: Vector, m1: number, m2: number): Vector;
    static calcEasing(value: number, type: EasingType): number;
}
