import type { DestroyMode } from "../../../../Enums";
import type { ISplit } from "./ISplit";
export interface IDestroy {
    mode: DestroyMode;
    split: ISplit;
}
