import type { Particle } from "../Core/Particle";
import type { Range } from "./Range";
import type { Point } from "./Point";
import { Rectangle } from "./Rectangle";
import type { ICoordinates } from "../Core/Interfaces/ICoordinates";
import type { Container } from "../Core/Container";
import type { IDimension } from "../Core/Interfaces/IDimension";
export declare class QuadTree {
    readonly rectangle: Rectangle;
    readonly capacity: number;
    readonly points: Point[];
    private northEast?;
    private northWest?;
    private southEast?;
    private southWest?;
    private divided;
    constructor(rectangle: Rectangle, capacity: number);
    subdivide(): void;
    insert(point: Point): boolean;
    queryCircle(position: ICoordinates, radius: number): Particle[];
    queryCircleWarp(position: ICoordinates, radius: number, containerOrSize: Container | IDimension): Particle[];
    queryRectangle(position: ICoordinates, size: IDimension): Particle[];
    query(range: Range, found?: Particle[]): Particle[];
}
