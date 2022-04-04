import type { IModes } from "../../../Interfaces/Interactivity/Modes/IModes";
import { Bubble } from "./Bubble";
import { Connect } from "./Connect";
import { Grab } from "./Grab";
import { Remove } from "./Remove";
import { Push } from "./Push";
import { Repulse } from "./Repulse";
import { Slow } from "./Slow";
import type { RecursivePartial } from "../../../../Types";
import { Trail } from "./Trail";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import { Attract } from "./Attract";
import { Light } from "./Light";
import { Bounce } from "./Bounce";
export declare class Modes implements IModes, IOptionLoader<IModes> {
    attract: Attract;
    bounce: Bounce;
    bubble: Bubble;
    connect: Connect;
    grab: Grab;
    light: Light;
    push: Push;
    remove: Remove;
    repulse: Repulse;
    slow: Slow;
    trail: Trail;
    constructor();
    load(data?: RecursivePartial<IModes>): void;
}
