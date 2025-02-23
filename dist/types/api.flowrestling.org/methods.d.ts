import { SearchResultsTyped } from "./search";
export declare function searchByName<T extends boolean>(name: string, { limit, page, onProgress, useOfp }: {
    limit: number;
    page: number;
    onProgress: (v: number) => void;
    useOfp: T;
}): Promise<SearchResultsTyped<T>>;
//# sourceMappingURL=methods.d.ts.map