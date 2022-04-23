import { IOptionsColor } from "../Interfaces/IOptionsColor";
import { IRgb, IHsl, IHsv, IValueColor } from "../../Core/Interfaces/Colors";
import { RecursivePartial, SingleOrMultiple } from "../../Types";
import { IOptionLoader } from "../Interfaces/IOptionLoader";
export declare class OptionsColor implements IOptionsColor, IOptionLoader<IOptionsColor> {
    value: SingleOrMultiple<SingleOrMultiple<string> | IValueColor | IRgb | IHsl | IHsv>;
    constructor();
    static create(source?: OptionsColor, data?: SingleOrMultiple<string> | RecursivePartial<IOptionsColor>): OptionsColor;
    load(data?: RecursivePartial<IOptionsColor>): void;
}
