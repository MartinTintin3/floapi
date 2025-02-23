import { fetchWithProgress } from "../../utils";
import type { NodeResult, SearchResultsTyped } from "./search";

export async function searchByName<T extends boolean>(name: string, config: { limit: number, page: number, onProgress: (v: number) => void, useOfp: T }): Promise<SearchResultsTyped<T>> {
	return fetchWithProgress<SearchResultsTyped<T>>(`https://api.flowrestling.org/api/experiences/web/legacy-core/search?site_id=2&version=1.33.2&limit=${config.limit}&view=global-search-web&fields=data%3C1%3E&q=${encodeURIComponent(name)}&page=${config.page}&type=person` + (config.useOfp ? "&useOfp=true" : ""), config.onProgress);
}

export async function fetchFromNode(node: number, onProgress?: (progress: number) => void): Promise<NodeResult> {
	return fetchWithProgress<NodeResult>(`https://api.flowrestling.org/api/collections/from-node/${node}`, onProgress);
}