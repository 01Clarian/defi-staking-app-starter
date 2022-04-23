import { Container } from "../../Core/Container";
import { Particle } from "../../Core/Particle";
import { ExternalInteractorBase } from "../../Core/ExternalInteractorBase";
export declare class Bubbler extends ExternalInteractorBase {
    constructor(container: Container);
    isEnabled(): boolean;
    reset(particle: Particle, force?: boolean): void;
    interact(): void;
    private singleSelectorHover;
    private process;
    private clickBubble;
    private hoverBubble;
    private hoverBubbleSize;
    private hoverBubbleOpacity;
    private hoverBubbleColor;
}
