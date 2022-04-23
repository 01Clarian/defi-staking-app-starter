import type { Container } from "./Container";
export declare class FrameManager {
    private readonly container;
    constructor(container: Container);
    nextFrame(timestamp: DOMHighResTimeStamp): void;
}
