import type { SingleOrMultiple } from "./SingleOrMultiple";
import type { IShapeValues } from "../Options/Interfaces/Particles/Shape/IShapeValues";
export declare type ShapeData = {
    [type: string]: SingleOrMultiple<IShapeValues>;
};
