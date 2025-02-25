import { FloObjectTypeString } from "./consts";
import * as Relationships from "./relationships";
import * as Responses from "./responses";
import { FloObject, UUID, WrestlersIncludeString, BoutsIncludeString, WrestlerObject, BoutObject } from "./types";
import { fetchWithProgress } from "../../utils";
import { Nothing } from "../..";

export type FetchConfig = {
	pageSize: number;
	pageOffset: number;
	onProgress?: (progress: number) => void;
}

export async function fetchWithProgressTyped<O extends FloObject, R extends Relationships.Generic | Nothing, I = Exclude<FloObject, O> | Nothing>(url: string, onProgress?: (progress: number) => void): Promise<Responses.Base<O, R, I>> {
	return fetchWithProgress<Responses.Base<O, R, I>>(url, onProgress);
}

export async function fetchWrestlersByAthleteId<R extends Relationships.ToWrestler | Nothing, I extends Exclude<FloObject, WrestlerObject> | Nothing>(id: UUID, config: FetchConfig, include: readonly WrestlersIncludeString[] = ["bracketPlacements.weightClass", "division", "event", "weightClass", "team"], extra?: string): Promise<Responses.Wrestlers<R, I>> {
	return fetchWithProgressTyped<WrestlerObject, R, I>(`https://floarena-api.flowrestling.org/wrestlers/?identityPersonId=${id}&orderBy=eventEndDateTime&orderDirection=desc&page[size]=${config.pageSize}&page[offset]=${config.pageOffset}` + (include.length ? `&include=${include.join(",")}` : "") + (extra ?? ""), config.onProgress);
}

export async function fetchBoutsByAthlete<R extends Relationships.ToBout | Nothing, I extends Exclude<FloObject, BoutObject> | Nothing>(id: UUID, config: FetchConfig, include: readonly BoutsIncludeString[] = ["bottomWrestler.team", "topWrestler.team", "weightClass", "topWrestler.division", "bottomWrestler.division", "event","roundName"], extra?: string): Promise<Responses.Bouts<R, I>> {
	return fetchWithProgressTyped<BoutObject, R, I>(`https://floarena-api.flowrestling.org/bouts/?identityPersonId=${id}&page[size]=${config.pageSize}&page[offset]=${config.pageOffset}&hasResult=true` + (include.length ? `&include=${include.join(",")}` : "") + (extra ?? ""), config.onProgress);
}

export async function fetchWrestlersByWeightClass<R extends Relationships.ToWrestler | Nothing, I extends Exclude<FloObject, WrestlerObject> | Nothing>(id: UUID, config: FetchConfig, include: readonly string[] = [], extra?: string): Promise<Responses.Wrestlers<R, I>> {
	return fetchWithProgressTyped<WrestlerObject, R, I>(`https://floarena-api.flowrestling.org/wrestlers/?weightClassId=${id}&page[size]=${config.pageSize}&page[offset]=${config.pageOffset}` + (include.length ? `&include=${include.join(",")}` : "") + (extra ?? ""),);
}

export async function fetchBoutsByEvent<R extends Relationships.ToBout | Nothing, I extends Exclude<FloObject, BoutObject> | Nothing>(id: UUID, config: FetchConfig, include: readonly BoutsIncludeString[] = ["bottomWrestler.team", "topWrestler.team", "weightClass", "topWrestler.division", "bottomWrestler.division", "roundName"], extra?: string): Promise<Responses.Bouts<R, I>> {
	return fetchWithProgressTyped<BoutObject, R, I>(`https://floarena-api.flowrestling.org/bouts/?eventId=${id}&page[size]=${config.pageSize}&page[offset]=${config.pageOffset}&hasResult=true` + (include.length ? `&include=${include.join(",")}` : "") + (extra ?? ""), config.onProgress);
}

export function findIncludedObjectById<T extends FloObject>(id: UUID, type: FloObjectTypeString, res: Responses.Base<FloObject, Relationships.Generic | Nothing, FloObject>) {
	return res.included.find(i => i.type == type && i.id == id) as T | undefined;
}