import { fetchWithProgress } from "../../utils";
export function fetchWithProgressTyped(url, onProgress) {
    return fetchWithProgress(url, onProgress);
}
export function fetchWrestlersByAthleteId(id, config, include = ["bracketPlacements.weightClass", "division", "event", "weightClass", "team"], extra) {
    return fetchWithProgressTyped(`https://floarena-api.flowrestling.org/wrestlers/?identityPersonId=${id}&orderBy=eventEndDateTime&orderDirection=desc&page[size]=${config.pageSize}&page[offset]=${config.pageOffset}` + (include.length ? `&include=${include.join(",")}` : "") + (extra !== null && extra !== void 0 ? extra : ""), config.onProgress);
}
export function fetchBoutsByAthlete(id, config, include = ["bottomWrestler.team", "topWrestler.team", "weightClass", "topWrestler.division", "bottomWrestler.division", "event", "roundName"], extra) {
    return fetchWithProgressTyped(`https://floarena-api.flowrestling.org/bouts/?identityPersonId=${id}&page[size]=${config.pageSize}&page[offset]=${config.pageOffset}&hasResult=true` + (include.length ? `&include=${include.join(",")}` : "") + (extra !== null && extra !== void 0 ? extra : ""), config.onProgress);
}
export function fetchWrestlersByWeightClass(id, config, include = [], extra) {
    return fetchWithProgressTyped(`https://floarena-api.flowrestling.org/wrestlers/?weightClassId=${id}&page[size]=${config.pageSize}&page[offset]=${config.pageOffset}` + (include.length ? `&include=${include.join(",")}` : "") + (extra !== null && extra !== void 0 ? extra : ""));
}
export function fetchBoutsByEvent(id, config, include = ["bottomWrestler.team", "topWrestler.team", "weightClass", "topWrestler.division", "bottomWrestler.division", "roundName"], extra) {
    return fetchWithProgressTyped(`https://floarena-api.flowrestling.org/bouts/?eventId=${id}&page[size]=${config.pageSize}&page[offset]=${config.pageOffset}&hasResult=true` + (include.length ? `&include=${include.join(",")}` : "") + (extra !== null && extra !== void 0 ? extra : ""), config.onProgress);
}
export function fetchFromNode(node, onProgress) {
    return fetchWithProgress(`https://api.flowrestling.org/api/collections/from-node/${node}`, onProgress);
}
export function findIncludedObjectById(id, type, res) {
    return res.included.find(i => i.type == type && i.id == id);
}
//# sourceMappingURL=methods.js.map