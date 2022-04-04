import { Range } from "./Range";
import type { IDimension } from "../Core/Interfaces/IDimension";
import type { ICoordinates } from "../Core/Interfaces/ICoordinates";
export declare class Rectangle extends Range {
    readonly size: IDimension;
    constructor(x: number, y: number, width: number, height: number);
    contains(point: ICoordinates): boolean;
    intersects(range: Range): boolean;
}
