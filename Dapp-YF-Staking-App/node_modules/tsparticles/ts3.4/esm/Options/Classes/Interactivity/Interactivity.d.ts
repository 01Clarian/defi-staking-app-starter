import { IInteractivity } from "../../Interfaces/Interactivity/IInteractivity";
import { InteractivityDetect } from "../../../Enums";
import { Events } from "./Events/Events";
import { Modes } from "./Modes/Modes";
import { RecursivePartial } from "../../../Types";
import { IOptionLoader } from "../../Interfaces/IOptionLoader";
export declare class Interactivity implements IInteractivity, IOptionLoader<IInteractivity> {
    detect_on: InteractivityDetect | keyof typeof InteractivityDetect;
    detectsOn: InteractivityDetect | keyof typeof InteractivityDetect;
    events: Events;
    modes: Modes;
    constructor();
    load(data?: RecursivePartial<IInteractivity>): void;
}
