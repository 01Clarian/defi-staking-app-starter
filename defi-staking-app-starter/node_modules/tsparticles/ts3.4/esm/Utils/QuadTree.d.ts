import { Particle } from "../Core/Particle";
import { Range } from "./Range";
import { Point } from "./Point";
import { Rectangle } from "./Rectangle";
import { ICoordinates } from "../Core/Interfaces/ICoordinates";
import { Container } from "../Core/Container";
import { IDimension } from "../Core/Interfaces/IDimension";
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
