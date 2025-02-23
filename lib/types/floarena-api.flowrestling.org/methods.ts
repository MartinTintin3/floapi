import { FloObjectTypeString } from "./consts";
import { Relationships } from "./relationships";
import { Responses } from "./responses";
import { FloObject, UUID, WrestlersIncludeString, BoutsIncludeString, Wrestler, Bout } from "./types";
import { fetchWithProgress } from "../../utils";

export type FetchConfig = {
	pageSize: number;
	pageOffset: number;
	onProgress?: (progress: number) => void;
}

export function fetchWithProgressTyped<O extends FloObject, R extends Relationships.Generic | void, I = Exclude<FloObject, O> | void>(url: string, onProgress?: (progress: number) => void): Promise<Responses.Base<O, R, I>> {
	return fetchWithProgress<Responses.Base<O, R, I>>(url, onProgress);
}

export function fetchWrestlersByAthleteId<R extends Relationships.ToWrestler | void, I extends Exclude<FloObject, Wrestler.Object> | void>(id: UUID, config: FetchConfig, include: readonly WrestlersIncludeString[] = ["bracketPlacements.weightClass", "division", "event", "weightClass", "team"], extra?: string): Promise<Responses.Wrestlers<R, I>> {
	return fetchWithProgressTyped<Wrestler.Object, R, I>(`https://floarena-api.flowrestling.org/wrestlers/?identityPersonId=${id}&orderBy=eventEndDateTime&orderDirection=desc&page[size]=${config.pageSize}&page[offset]=${config.pageOffset}` + (include.length ? `&include=${include.join(",")}` : "") + (extra ?? ""), config.onProgress);
}

export function fetchBoutsByAthlete<R extends Relationships.ToBout | void, I extends Exclude<FloObject, Bout.Object> | void>(id: UUID, config: FetchConfig, include: readonly BoutsIncludeString[] = ["bottomWrestler.team", "topWrestler.team", "weightClass", "topWrestler.division", "bottomWrestler.division", "event","roundName"], extra?: string): Promise<Responses.Bouts<R, I>> {
	return fetchWithProgressTyped<Bout.Object, R, I>(`https://floarena-api.flowrestling.org/bouts/?identityPersonId=${id}&page[size]=${config.pageSize}&page[offset]=${config.pageOffset}&hasResult=true` + (include.length ? `&include=${include.join(",")}` : "") + (extra ?? ""), config.onProgress);
}

export function fetchWrestlersByWeightClass<R extends Relationships.ToWrestler | void, I extends Exclude<FloObject, Wrestler.Object> | void>(id: UUID, config: FetchConfig, include: readonly string[] = [], extra?: string): Promise<Responses.Wrestlers<R, I>> {
	return fetchWithProgressTyped<Wrestler.Object, R, I>(`https://floarena-api.flowrestling.org/wrestlers/?weightClassId=${id}&page[size]=${config.pageSize}&page[offset]=${config.pageOffset}` + (include.length ? `&include=${include.join(",")}` : "") + (extra ?? ""),);
}

export function fetchBoutsByEvent<R extends Relationships.ToBout | void, I extends Exclude<FloObject, Bout.Object> | void>(id: UUID, config: FetchConfig, include: readonly BoutsIncludeString[] = ["bottomWrestler.team", "topWrestler.team", "weightClass", "topWrestler.division", "bottomWrestler.division", "roundName"], extra?: string): Promise<Responses.Bouts<R, I>> {
	return fetchWithProgressTyped<Bout.Object, R, I>(`https://floarena-api.flowrestling.org/bouts/?eventId=${id}&page[size]=${config.pageSize}&page[offset]=${config.pageOffset}&hasResult=true` + (include.length ? `&include=${include.join(",")}` : "") + (extra ?? ""), config.onProgress);
}

export function findIncludedObjectById<T extends FloObject>(id: UUID, type: FloObjectTypeString, res: Responses.Base<FloObject, Relationships.Generic | void, FloObject>) {
	return res.included.find(i => i.type == type && i.id == id) as T | undefined;
}