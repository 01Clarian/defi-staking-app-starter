import type { IOptions } from "./Options/Interfaces/IOptions";
import type { Container } from "./Core/Container";
import type { ShapeDrawerAfterEffectFunction, ShapeDrawerDestroyFunction, ShapeDrawerDrawFunction, ShapeDrawerInitFunction, RecursivePartial, SingleOrMultiple } from "./Types";
import type { Particle } from "./Core/Particle";
import type { IInteractor, IMovePathGenerator, IParticleUpdater, IPlugin, IShapeDrawer } from "./Core/Interfaces";
export declare class MainSlim {
    #private;
    constructor();
    init(): void;
    loadFromArray(tagId: string, options: RecursivePartial<IOptions>[], index?: number): Promise<Container | undefined>;
    load(tagId: string, options: SingleOrMultiple<RecursivePartial<IOptions>>): Promise<Container | undefined>;
    set(id: string, element: HTMLElement, options: RecursivePartial<IOptions>): Promise<Container | undefined>;
    loadJSON(tagId: string, pathConfigJson: SingleOrMultiple<string>, index?: number): Promise<Container | undefined>;
    setJSON(id: string, element: HTMLElement, pathConfigJson: SingleOrMultiple<string>, index?: number): Promise<Container | undefined>;
    setOnClickHandler(callback: (e: Event, particles?: Particle[]) => void): void;
    dom(): Container[];
    domItem(index: number): Container | undefined;
    addShape(shape: string, drawer: IShapeDrawer | ShapeDrawerDrawFunction, init?: ShapeDrawerInitFunction, afterEffect?: ShapeDrawerAfterEffectFunction, destroy?: ShapeDrawerDestroyFunction): void;
    addPreset(preset: string, options: RecursivePartial<IOptions>, override?: boolean): void;
    addPlugin(plugin: IPlugin): void;
    addPathGenerator(name: string, generator: IMovePathGenerator): void;
    addInteractor(name: string, interactorInitializer: (container: Container) => IInteractor): void;
    addParticleUpdater(name: string, updaterInitializer: (container: Container) => IParticleUpdater): void;
}
