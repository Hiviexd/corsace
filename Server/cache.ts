import { LRUCache } from "lru-cache";

export const cache = new LRUCache<string, any>({
    max: 100,
});

export function deleteMCACache (data: { year: number }) {
    return deleteEndpoints([
        "/api/mcaInfo/front?year=" + data.year,
        "/api/mca?year=" + data.year,
        "/api/staff",
    ]);
}

export function deleteEndpoints (endpoints: string[]) {
    const result: string[] = [];
    for (const endpoint of endpoints) {
        const res = cache.delete(endpoint);
        if (!res)
            result.push(endpoint);
    }
    return result;
}