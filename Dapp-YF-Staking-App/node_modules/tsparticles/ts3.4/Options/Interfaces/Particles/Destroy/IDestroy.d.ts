import { DestroyMode } from "../../../../Enums";
import { ISplit } from "./ISplit";
export interface IDestroy {
    mode: DestroyMode;
    split: ISplit;
}
