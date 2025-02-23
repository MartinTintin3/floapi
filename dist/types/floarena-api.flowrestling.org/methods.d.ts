import { FloObjectTypeString } from "./consts";
import { NodeResult } from "../api.flowrestling.org";
import Relationships from "./relationships";
import Responses from "./responses";
import { FloObject, UUID, WrestlersIncludeString, BoutsIncludeString, Wrestler, Bout } from "./types";
export type FetchConfig = {
    pageSize: number;
    pageOffset: number;
    onProgress?: (progress: number) => void;
};
export declare function fetchWithProgressTyped<O extends FloObject, R extends Relationships.Generic | void, I = Exclude<FloObject, O> | void>(url: string, onProgress?: (progress: number) => void): Promise<Responses.Base<O, R, I>>;
export declare function fetchWrestlersByAthleteId<R extends Relationships.ToWrestler | void, I extends Exclude<FloObject, Wrestler.Object> | void>(id: UUID, config: FetchConfig, include?: readonly WrestlersIncludeString[], extra?: string): Promise<Responses.Wrestlers<R, I>>;
export declare function fetchBoutsByAthlete<R extends Relationships.ToBout | void, I extends Exclude<FloObject, Bout.Object> | void>(id: UUID, config: FetchConfig, include?: readonly BoutsIncludeString[], extra?: string): Promise<Responses.Bouts<R, I>>;
export declare function fetchWrestlersByWeightClass<R extends Relationships.ToWrestler | void, I extends Exclude<FloObject, Wrestler.Object> | void>(id: UUID, config: FetchConfig, include?: readonly string[], extra?: string): Promise<Responses.Wrestlers<R, I>>;
export declare function fetchBoutsByEvent<R extends Relationships.ToBout | void, I extends Exclude<FloObject, Bout.Object> | void>(id: UUID, config: FetchConfig, include?: readonly BoutsIncludeString[], extra?: string): Promise<Responses.Bouts<R, I>>;
export declare function fetchFromNode(node: number, onProgress?: (progress: number) => void): Promise<NodeResult>;
export declare function findIncludedObjectById<T extends FloObject>(id: UUID, type: FloObjectTypeString, res: Responses.Base<FloObject, Relationships.Generic | void, FloObject>): T | undefined;
//# sourceMappingURL=methods.d.ts.map