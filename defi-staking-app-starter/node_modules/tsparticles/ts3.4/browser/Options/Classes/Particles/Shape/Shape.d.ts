import { IShape } from "../../../Interfaces/Particles/Shape/IShape";
import { ShapeType } from "../../../../Enums";
import { RecursivePartial, ShapeData, SingleOrMultiple } from "../../../../Types";
import { Stroke } from "../Stroke";
import { IPolygonShape } from "../../../Interfaces/Particles/Shape/IPolygonShape";
import { IImageShape } from "../../../Interfaces/Particles/Shape/IImageShape";
import { ICharacterShape } from "../../../Interfaces/Particles/Shape/ICharacterShape";
import { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class Shape implements IShape, IOptionLoader<IShape> {
    image: SingleOrMultiple<IImageShape>;
    custom: ShapeData;
    images: IImageShape[];
    stroke: SingleOrMultiple<Stroke>;
    character: SingleOrMultiple<ICharacterShape>;
    polygon: SingleOrMultiple<IPolygonShape>;
    type: SingleOrMultiple<ShapeType | keyof typeof ShapeType | string>;
    options: ShapeData;
    constructor();
    load(data?: RecursivePartial<IShape>): void;
    private loadShape;
}
