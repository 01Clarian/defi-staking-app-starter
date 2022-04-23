import { IShapeValues } from "./IShapeValues";
import { SingleOrMultiple } from "../../../../Types";
export interface ICharacterShape extends IShapeValues {
    value: SingleOrMultiple<string>;
    font: string;
    style: string;
    weight: string;
}
