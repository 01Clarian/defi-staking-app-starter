import type { IShape } from "../../../Interfaces/Particles/Shape/IShape";
import { ShapeType } from "../../../../Enums";
import type { RecursivePartial, ShapeData, SingleOrMultiple } from "../../../../Types";
import { Stroke } from "../Stroke";
import type { IPolygonShape } from "../../../Interfaces/Particles/Shape/IPolygonShape";
import type { IImageShape } from "../../../Interfaces/Particles/Shape/IImageShape";
import type { ICharacterShape } from "../../../Interfaces/Particles/Shape/ICharacterShape";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class Shape implements IShape, IOptionLoader<IShape> {
    get image(): SingleOrMultiple<IImageShape>;
    set image(value: SingleOrMultiple<IImageShape>);
    get custom(): ShapeData;
    set custom(value: ShapeData);
    get images(): IImageShape[];
    set images(value: IImageShape[]);
    get stroke(): SingleOrMultiple<Stroke>;
    set stroke(_value: SingleOrMultiple<Stroke>);
    get character(): SingleOrMultiple<ICharacterShape>;
    set character(value: SingleOrMultiple<ICharacterShape>);
    get polygon(): SingleOrMultiple<IPolygonShape>;
    set polygon(value: SingleOrMultiple<IPolygonShape>);
    type: SingleOrMultiple<ShapeType | keyof typeof ShapeType | string>;
    options: ShapeData;
    constructor();
    load(data?: RecursivePartial<IShape>): void;
    private loadShape;
}
