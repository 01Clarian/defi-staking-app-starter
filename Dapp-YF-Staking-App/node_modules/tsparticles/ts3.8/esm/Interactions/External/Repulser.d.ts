import type { Container } from "../../Core/Container";
import { ExternalInteractorBase } from "../../Core/ExternalInteractorBase";
export declare class Repulser extends ExternalInteractorBase {
    constructor(container: Container);
    isEnabled(): boolean;
    reset(): void;
    interact(): void;
    private singleSelectorRepulse;
    private hoverRepulse;
    private processRepulse;
    private clickRepulse;
}
