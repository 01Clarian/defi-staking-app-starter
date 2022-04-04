import { ShapeType } from "../../../../Enums";
import { IImageShape } from "./IImageShape";
import { ICharacterShape } from "./ICharacterShape";
import { IPolygonShape } from "./IPolygonShape";
import { IStroke } from "../IStroke";
import { ShapeData, SingleOrMultiple } from "../../../../Types";
export interface IShape {
    type: SingleOrMultiple<ShapeType | keyof typeof ShapeType | string>;
    stroke: SingleOrMultiple<IStroke>;
    polygon: SingleOrMultiple<IPolygonShape>;
    character: SingleOrMultiple<ICharacterShape>;
    image: SingleOrMultiple<IImageShape>;
    images: SingleOrMultiple<IImageShape>;
    custom: ShapeData;
    options: ShapeData;
}
