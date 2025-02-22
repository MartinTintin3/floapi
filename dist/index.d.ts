import { BaseResponse, BoutsResponse, NodeResult, SearchResultPerson, SearchResultPersonUseOfp, SearchResults, WrestlersResponse } from "./types/floarena-api/responses";
import { BoutsIncludeString, FloObject, FloObjectTypeString, UUID, WrestlersIncludeString } from "./types/floarena-api/types";
import { Relationship, RelationshipToBout, RelationshipToWrestler } from "./types/floarena-api/relationships";
import { WrestlerObject } from "./types/floarena-api/objects/wrestler";
import { BoutObject } from "./types/floarena-api/objects/bout";
export type FetchConfig = {
    pageSize: number;
    pageOffset: number;
    onProgress?: (progress: number) => void;
};
export type SearchResultsTyped<O extends boolean> = O extends true ? SearchResults<SearchResultPersonUseOfp> : SearchResults<SearchResultPerson>;
export declare function searchByName<T extends boolean>(name: string, { limit, page, onProgress, useOfp }: {
    limit: number;
    page: number;
    onProgress: (v: number) => void;
    useOfp: T;
}): Promise<SearchResultsTyped<T>>;
export declare function fetchWithProgressTyped<O extends FloObject, R extends Relationship | void, I = Exclude<FloObject, O> | void>(url: string, onProgress?: (progress: number) => void): Promise<BaseResponse<O, R, I>>;
export declare function fetchWrestlersByAthleteId<R extends RelationshipToWrestler | void, I extends Exclude<FloObject, WrestlerObject> | void>(athleteId: UUID, config: FetchConfig, include?: readonly WrestlersIncludeString[], extra?: string): Promise<WrestlersResponse<R, I>>;
export declare function fetchBouts<R extends RelationshipToBout | void, I extends Exclude<FloObject, BoutObject> | void>(athleteId: UUID, config: FetchConfig, include?: readonly BoutsIncludeString[], extra?: string): Promise<BoutsResponse<R, I>>;
export declare function fetchWrestlersByWeightClass<R extends RelationshipToWrestler | void, I extends Exclude<FloObject, WrestlerObject> | void>(weightClassId: UUID, config: FetchConfig, include?: readonly string[], extra?: string): Promise<WrestlersResponse<R, I>>;
export declare function fetchFromNode(node: number, onProgress?: (progress: number) => void): Promise<NodeResult>;
export declare function findIncludedObjectById<T extends FloObject>(id: UUID, type: FloObjectTypeString, res: BaseResponse<FloObject, Relationship | void, FloObject>): T | undefined;
//# sourceMappingURL=index.d.ts.map