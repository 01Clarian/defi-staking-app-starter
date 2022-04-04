import { IContainerPlugin } from "../../Core/Interfaces/IContainerPlugin";
import { EmitterInstance } from "./EmitterInstance";
import { Container } from "../../Core/Container";
import { IEmitter } from "./Options/Interfaces/IEmitter";
import { RecursivePartial, SingleOrMultiple } from "../../Types";
import { Emitter } from "./Options/Classes/Emitter";
import { IOptions } from "../../Options/Interfaces/IOptions";
import { IEmitterOptions } from "./Options/Interfaces/IEmitterOptions";
import { ICoordinates } from "../../Core/Interfaces/ICoordinates";
import { IDelta } from "../../Core/Interfaces/IDelta";
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
