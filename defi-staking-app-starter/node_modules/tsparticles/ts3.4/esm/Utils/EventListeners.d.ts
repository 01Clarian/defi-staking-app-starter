import { Container } from "../Core/Container";
export declare class EventListeners {
    private readonly container;
    private readonly mouseMoveHandler;
    private readonly touchStartHandler;
    private readonly touchMoveHandler;
    private readonly touchEndHandler;
    private readonly mouseLeaveHandler;
    private readonly touchCancelHandler;
    private readonly touchEndClickHandler;
    private readonly mouseDownHandler;
    private readonly mouseUpHandler;
    private readonly visibilityChangeHandler;
    private readonly resizeHandler;
    private canPush;
    private resizeTimeout?;
    constructor(container: Container);
    addListeners(): void;
    removeListeners(): void;
    private manageListeners;
    private handleWindowResize;
    private handleVisibilityChange;
    private mouseDown;
    private mouseTouchMove;
    private mouseTouchFinish;
    private mouseTouchClick;
    private doMouseTouchClick;
    private handleClickMode;
}
