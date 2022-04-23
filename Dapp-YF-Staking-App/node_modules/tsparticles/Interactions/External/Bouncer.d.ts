import type { Container } from "../../Core/Container";
import { ExternalInteractorBase } from "../../Core/ExternalInteractorBase";
export declare class Bouncer extends ExternalInteractorBase {
    constructor(container: Container);
    isEnabled(): boolean;
    interact(): void;
    reset(): void;
    private processMouseBounce;
    private singleSelectorBounce;
    private processBounce;
}
