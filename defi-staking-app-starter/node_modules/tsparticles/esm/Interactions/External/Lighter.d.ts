import type { Container } from "../../Core/Container";
import { ExternalInteractorBase } from "../../Core/ExternalInteractorBase";
export declare class Lighter extends ExternalInteractorBase {
    constructor(container: Container);
    interact(): void;
    isEnabled(): boolean;
    reset(): void;
}
