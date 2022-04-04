import { SizeMode } from "../../../../Enums";
import { IDimension } from "../../../../Core/Interfaces/IDimension";
export interface IEmitterSize extends IDimension {
    mode: SizeMode | keyof typeof SizeMode;
}
