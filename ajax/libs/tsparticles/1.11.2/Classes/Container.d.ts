import { Canvas } from "./Canvas";
import type { IRepulse } from "../Interfaces/IRepulse";
import type { IBubble } from "../Interfaces/IBubble";
import type { IImage } from "../Interfaces/IImage";
import type { IContainerInteractivity } from "../Interfaces/IContainerInteractivity";
import { Particles } from "./Particles";
import { Retina } from "./Retina";
import { PolygonMask } from "./PolygonMask";
import { ImageShape } from "./Options/Particles/Shape/ImageShape";
import type { IOptions } from "../Interfaces/Options/IOptions";
import { FrameManager } from "./FrameManager";
import type { RecursivePartial } from "../Types/RecursivePartial";
import { PresetType } from "../Enums/PresetType";
declare global {
    interface Window {
        customRequestAnimationFrame: (callback: FrameRequestCallback) => number;
        mozRequestAnimationFrame: (callback: FrameRequestCallback) => number;
        oRequestAnimationFrame: (callback: FrameRequestCallback) => number;
        msRequestAnimationFrame: (callback: FrameRequestCallback) => number;
        customCancelRequestAnimationFrame: (handle: number) => void;
        webkitCancelRequestAnimationFrame: (handle: number) => void;
        mozCancelRequestAnimationFrame: (handle: number) => void;
        oCancelRequestAnimationFrame: (handle: number) => void;
        msCancelRequestAnimationFrame: (handle: number) => void;
    }
}
export declare class Container {
    readonly sourceOptions?: RecursivePartial<IOptions>;
    readonly id: string;
    interactivity: IContainerInteractivity;
    options: IOptions;
    retina: Retina;
    canvas: Canvas;
    particles: Particles;
    polygon: PolygonMask;
    bubble: IBubble;
    repulse: IRepulse;
    images: IImage[];
    lastFrameTime: number;
    pageHidden: boolean;
    drawer: FrameManager;
    started: boolean;
    destroyed: boolean;
    private paused;
    private drawAnimationFrame?;
    private eventListeners;
    constructor(id: string, params?: RecursivePartial<IOptions>, ...presets: PresetType[]);
    static requestFrame(callback: FrameRequestCallback): number;
    static cancelAnimation(handle: number): void;
    play(): void;
    pause(): void;
    densityAutoParticles(): void;
    destroy(): void;
    exportImg(callback: BlobCallback): void;
    exportImage(callback: BlobCallback, type?: string, quality?: number): void;
    exportConfiguration(): string;
    loadImage(image: IImage, optionsImage: ImageShape): Promise<void>;
    refresh(): Promise<void>;
    stop(): void;
    start(): Promise<void>;
    private loadImageShape;
    private init;
    private checkBeforeDraw;
}
