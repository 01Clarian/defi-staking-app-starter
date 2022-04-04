import { Container } from "../Core/Container";
import { RecursivePartial } from "../Types";
import { IOptions } from "../Options/Interfaces/IOptions";
import { Options } from "../Options/Classes/Options";
import { IContainerPlugin, IInteractor, IMovePathGenerator, IParticleUpdater, IPlugin, IShapeDrawer } from "../Core/Interfaces";
export declare class Plugins {
    static getPlugin(plugin: string): IPlugin | undefined;
    static addPlugin(plugin: IPlugin): void;
    static getAvailablePlugins(container: Container): Map<string, IContainerPlugin>;
    static loadOptions(options: Options, sourceOptions: RecursivePartial<IOptions>): void;
    static getPreset(preset: string): RecursivePartial<IOptions> | undefined;
    static addPreset(presetKey: string, options: RecursivePartial<IOptions>, override?: boolean): void;
    static addShapeDrawer(type: string, drawer: IShapeDrawer): void;
    static getShapeDrawer(type: string): IShapeDrawer | undefined;
    static getSupportedShapes(): IterableIterator<string>;
    static getPathGenerator(type: string): IMovePathGenerator | undefined;
    static addPathGenerator(type: string, pathGenerator: IMovePathGenerator): void;
    static getInteractors(container: Container): IInteractor[];
    static addInteractor(name: string, initInteractor: (container: Container) => IInteractor): void;
    static getUpdaters(container: Container): IParticleUpdater[];
    static addParticleUpdater(name: string, initUpdater: (container: Container) => IParticleUpdater): void;
}
