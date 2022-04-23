import type { IContainerPlugin } from "../../Core/Interfaces/IContainerPlugin";
import { EmitterInstance } from "./EmitterInstance";
import type { Container } from "../../Core/Container";
import type { IEmitter } from "./Options/Interfaces/IEmitter";
import type { RecursivePartial, SingleOrMultiple } from "../../Types";
import { Emitter } from "./Options/Classes/Emitter";
import type { IOptions } from "../../Options/Interfaces/IOptions";
import type { IEmitterOptions } from "./Options/Interfaces/IEmitterOptions";
import type { ICoordinates } from "../../Core/Interfaces/ICoordinates";
import type { IDelta } from "../../Core/Interfaces/IDelta";
export declare class Emitters implements IContainerPlugin {
    private readonly container;
    array: EmitterInstance[];
    emitters: SingleOrMultiple<Emitter>;
    interactivityEmitters: SingleOrMultiple<Emitter>;
    constructor(container: Container);
    init(options?: RecursivePartial<IOptions & IEmitterOptions>): void;
    play(): void;
    pause(): void;
    stop(): void;
    update(delta: IDelta): void;
    handleClickMode(mode: string): void;
    resize(): void;
    addEmitter(options: IEmitter, position?: ICoordinates): EmitterInstance;
    removeEmitter(emitter: EmitterInstance): void;
}
