import { Container } from "./Container";
import { IOptions } from "../Options/Interfaces/IOptions";
import { RecursivePartial } from "../Types";
import { Particle } from "./Particle";
import { SingleOrMultiple } from "../Types";
export declare class Loader {
    static dom(): Container[];
    static domItem(index: number): Container | undefined;
    static load(tagId: string, options?: SingleOrMultiple<RecursivePartial<IOptions>>, index?: number): Promise<Container | undefined>;
    static set(id: string, domContainer: HTMLElement, options?: SingleOrMultiple<RecursivePartial<IOptions>>, index?: number): Promise<Container | undefined>;
    static loadJSON(tagId: string, jsonUrl: SingleOrMultiple<string>, index?: number): Promise<Container | undefined>;
    static setJSON(id: string, domContainer: HTMLElement, jsonUrl: SingleOrMultiple<string>, index?: number): Promise<Container | undefined>;
    static setOnClickHandler(callback: (evt: Event, particles?: Particle[]) => void): void;
}
