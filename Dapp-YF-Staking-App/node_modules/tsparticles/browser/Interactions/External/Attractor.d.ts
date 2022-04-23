import type { Container } from "../../Core/Container";
import { ExternalInteractorBase } from "../../Core/ExternalInteractorBase";
export declare class Attractor extends ExternalInteractorBase {
    constructor(container: Container);
    isEnabled(): boolean;
    reset(): void;
    interact(): void;
    private hoverAttract;
    private processAttract;
    private clickAttract;
}
