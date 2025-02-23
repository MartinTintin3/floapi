import { fetchWithProgress } from "../../utils";
export function searchByName(name, { limit, page, onProgress, useOfp }) {
    return fetchWithProgress(`https://api.flowrestling.org/api/experiences/web/legacy-core/search?site_id=2&version=1.33.2&limit=${limit}&view=global-search-web&fields=data%3C1%3E&q=${encodeURIComponent(name)}&page=${page}&type=person` + (useOfp ? "&useOfp=true" : ""), onProgress);
}
//# sourceMappingURL=methods.js.map