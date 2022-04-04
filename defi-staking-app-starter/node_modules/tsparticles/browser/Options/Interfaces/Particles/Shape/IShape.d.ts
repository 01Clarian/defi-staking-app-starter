import type { ShapeType } from "../../../../Enums";
import type { IImageShape } from "./IImageShape";
import type { ICharacterShape } from "./ICharacterShape";
import type { IPolygonShape } from "./IPolygonShape";
import type { IStroke } from "../IStroke";
import type { ShapeData, SingleOrMultiple } from "../../../../Types";
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
