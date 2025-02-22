export function searchByName(name, { limit, page, onProgress, useOfp }) {
    return fetchWithProgress(`https://api.flowrestling.org/api/experiences/web/legacy-core/search?site_id=2&version=1.33.2&limit=${limit}&view=global-search-web&fields=data%3C1%3E&q=${encodeURIComponent(name)}&page=${page}&type=person` + (useOfp ? "&useOfp=true" : ""), onProgress);
}
function fetchWithProgress(url, onProgress) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.addEventListener("progress", e => {
            if (e.lengthComputable && onProgress)
                onProgress((e.loaded / e.total) * 100);
        });
        xhr.addEventListener("load", () => {
            if (onProgress)
                onProgress(100);
            resolve(JSON.parse(xhr.responseText));
        });
        xhr.addEventListener("error", reject);
        xhr.send();
    });
}
export function fetchWithProgressTyped(url, onProgress) {
    return fetchWithProgress(url, onProgress);
}
export function fetchWrestlersByAthleteId(athleteId, config, include = ["bracketPlacements.weightClass", "division", "event", "weightClass", "team"], extra) {
    return fetchWithProgressTyped(`https://floarena-api.flowrestling.org/wrestlers/?identityPersonId=${athleteId}&orderBy=eventEndDateTime&orderDirection=desc&page[size]=${config.pageSize}&page[offset]=${config.pageOffset}` + (include.length ? `&include=${include.join(",")}` : "") + (extra !== null && extra !== void 0 ? extra : ""), config.onProgress);
}
export function fetchBouts(athleteId, config, include = ["bottomWrestler.team", "topWrestler.team", "weightClass", "topWrestler.division", "bottomWrestler.division", "event", "roundName"], extra) {
    return fetchWithProgressTyped(`https://floarena-api.flowrestling.org/bouts/?identityPersonId=${athleteId}&page[size]=${config.pageSize}&page[offset]=${config.pageOffset}&hasResult=true` + (include.length ? `&include=${include.join(",")}` : "") + (extra !== null && extra !== void 0 ? extra : ""), config.onProgress);
}
export function fetchWrestlersByWeightClass(weightClassId, config, include = [], extra) {
    return fetchWithProgressTyped(`https://floarena-api.flowrestling.org/wrestlers/?weightClassId=${weightClassId}&page[size]=${config.pageSize}&page[offset]=${config.pageOffset}` + (include.length ? `&include=${include.join(",")}` : "") + (extra !== null && extra !== void 0 ? extra : ""));
}
export function fetchFromNode(node, onProgress) {
    return fetchWithProgress(`https://api.flowrestling.org/api/collections/from-node/${node}`, onProgress);
}
export function findIncludedObjectById(id, type, res) {
    return res.included.find(i => i.type == type && i.id == id);
}
//# sourceMappingURL=index.js.map