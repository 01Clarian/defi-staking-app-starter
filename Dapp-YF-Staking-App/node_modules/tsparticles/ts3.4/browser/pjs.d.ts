import { IOptions } from "./Options/Interfaces/IOptions";
import { Container } from "./Core/Container";
import { MainSlim } from "./main.slim";
import { RecursivePartial } from "./Types";
export interface IParticlesJS {
    (tagId: string, options: RecursivePartial<IOptions>): Promise<Container | undefined>;
    load(tagId: string, pathConfigJson: string, callback: (container?: Container) => void): void;
    setOnClickHandler(callback: EventListenerOrEventListenerObject): void;
}
declare const initPjs: (main: MainSlim) => {
    particlesJS: IParticlesJS;
    pJSDom: Container[];
};
export { initPjs };
