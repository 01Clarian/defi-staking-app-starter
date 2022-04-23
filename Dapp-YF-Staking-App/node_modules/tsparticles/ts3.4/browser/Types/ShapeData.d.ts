import { SingleOrMultiple } from "./SingleOrMultiple";
import { IShapeValues } from "../Options/Interfaces/Particles/Shape/IShapeValues";
export declare type ShapeData = {
    [type: string]: SingleOrMultiple<IShapeValues>;
};
