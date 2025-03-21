import type { ICoordinates } from "../../ICoordinates";
import type { IOptionLoader } from "../IOptionLoader";
export interface IAttract extends IOptionLoader<IAttract> {
    enable: boolean;
    rotateX: number;
    rotateY: number;
    rotate: ICoordinates;
}
