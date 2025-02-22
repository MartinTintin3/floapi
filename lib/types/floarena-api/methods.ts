import { FloObjectTypeString } from "./consts";
import { BoutObject } from "./objects/bout";
import { WrestlerObject } from "./objects/wrestler";
import { Relationship, RelationshipToWrestler, RelationshipToBout } from "./relationships";
import { BaseResponse, BoutsResponse, NodeResult, SearchResultPerson, SearchResultPersonUseOfp, SearchResults, WrestlersResponse } from "./responses";
import { FloObject, UUID, WrestlersIncludeString, BoutsIncludeString } from "./types";

export type FetchConfig = {
	pageSize: number;
	pageOffset: number;
	onProgress?: (progress: number) => void;
}

export type SearchResultsTyped<O extends boolean> = O extends true ? SearchResults<SearchResultPersonUseOfp> : SearchResults<SearchResultPerson>;

export function searchByName<T extends boolean>(name: string, { limit, page, onProgress, useOfp }: { limit: number, page: number, onProgress: (v: number) => void, useOfp: T }): Promise<SearchResultsTyped<T>> {
	return fetchWithProgress<SearchResultsTyped<T>>(`https://api.flowrestling.org/api/experiences/web/legacy-core/search?site_id=2&version=1.33.2&limit=${limit}&view=global-search-web&fields=data%3C1%3E&q=${encodeURIComponent(name)}&page=${page}&type=person` + (useOfp ? "&useOfp=true" : ""), onProgress);
}

function fetchWithProgress<T>(url: string, onProgress?: (progress: number) => void): Promise<T> {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open("GET", url, true);
		xhr.addEventListener("progress", e => {
			if (e.lengthComputable && onProgress) onProgress((e.loaded / e.total) * 100);
		});
		xhr.addEventListener("load", () => {
			if (onProgress) onProgress(100);
			resolve(JSON.parse(xhr.responseText) as T);
		});
		xhr.addEventListener("error", reject);
		xhr.send();
	});
}

export function fetchWithProgressTyped<O extends FloObject, R extends Relationship | void, I = Exclude<FloObject, O> | void>(url: string, onProgress?: (progress: number) => void): Promise<BaseResponse<O, R, I>> {
	return fetchWithProgress<BaseResponse<O, R, I>>(url, onProgress);
}

export function fetchWrestlersByAthleteId<R extends RelationshipToWrestler | void, I extends Exclude<FloObject, WrestlerObject> | void>(athleteId: UUID, config: FetchConfig, include: readonly WrestlersIncludeString[] = ["bracketPlacements.weightClass", "division", "event", "weightClass", "team"], extra?: string): Promise<WrestlersResponse<R, I>> {
	return fetchWithProgressTyped<WrestlerObject, R, I>(`https://floarena-api.flowrestling.org/wrestlers/?identityPersonId=${athleteId}&orderBy=eventEndDateTime&orderDirection=desc&page[size]=${config.pageSize}&page[offset]=${config.pageOffset}` + (include.length ? `&include=${include.join(",")}` : "") + (extra ?? ""), config.onProgress);
}

export function fetchBouts<R extends RelationshipToBout | void, I extends Exclude<FloObject, BoutObject> | void>(athleteId: UUID, config: FetchConfig, include: readonly BoutsIncludeString[] = ["bottomWrestler.team", "topWrestler.team", "weightClass", "topWrestler.division", "bottomWrestler.division", "event","roundName"], extra?: string): Promise<BoutsResponse<R, I>> {
	return fetchWithProgressTyped<BoutObject, R, I>(`https://floarena-api.flowrestling.org/bouts/?identityPersonId=${athleteId}&page[size]=${config.pageSize}&page[offset]=${config.pageOffset}&hasResult=true` + (include.length ? `&include=${include.join(",")}` : "") + (extra ?? ""), config.onProgress);
}

export function fetchWrestlersByWeightClass<R extends RelationshipToWrestler | void, I extends Exclude<FloObject, WrestlerObject> | void>(weightClassId: UUID, config: FetchConfig, include: readonly string[] = [], extra?: string): Promise<WrestlersResponse<R, I>> {
	return fetchWithProgressTyped<WrestlerObject, R, I>(`https://floarena-api.flowrestling.org/wrestlers/?weightClassId=${weightClassId}&page[size]=${config.pageSize}&page[offset]=${config.pageOffset}` + (include.length ? `&include=${include.join(",")}` : "") + (extra ?? ""),);
}

export function fetchFromNode(node: number, onProgress?: (progress: number) => void) {
	return fetchWithProgress<NodeResult>(`https://api.flowrestling.org/api/collections/from-node/${node}`, onProgress);
}

export function findIncludedObjectById<T extends FloObject>(id: UUID, type: FloObjectTypeString, res: BaseResponse<FloObject, Relationship | void, FloObject>) {
	return res.included.find(i => i.type == type && i.id == id) as T | undefined;
}