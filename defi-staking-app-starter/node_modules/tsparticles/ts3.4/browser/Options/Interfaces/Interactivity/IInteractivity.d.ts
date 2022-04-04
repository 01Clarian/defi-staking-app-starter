import { InteractivityDetect } from "../../../Enums";
import { IEvents } from "./Events/IEvents";
import { IModes } from "./Modes/IModes";
export interface IInteractivity {
    detect_on: InteractivityDetect | keyof typeof InteractivityDetect;
    detectsOn: InteractivityDetect | keyof typeof InteractivityDetect;
    events: IEvents;
    modes: IModes;
}
