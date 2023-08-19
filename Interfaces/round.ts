import { Mappool } from "./mappool";
import { MapOrder } from "./stage";

export const roundAcronyms = [
    "ql",
    "ro128",
    "ro64",
    "ro32",
    "ro16",
    "qf",
    "sf",
    "wf",
    "f",
    "gf",
    "lf",
    "lr1",
    "lr2",
    "lr3",
    "lr4",
    "lr5",
    "lr6",
    "lr7",
    "lr8",
    "lr9",
    "lr10",
    "rr",
    "ro",
    "ko1",
    "ko2",
    "ko3",
];

export const roundNames = [
    "qualifiers",
    "round of 128",
    "round of 64",
    "round of 32",
    "round of 16",
    "quarter finals",
    "semi finals",
    "winner finals",
    "finals",
    "grand finals",
    "losers finals",
    "losers round 1",
    "losers round 2",
    "losers round 3",
    "losers round 4",
    "losers round 5",
    "losers round 6",
    "losers round 7",
    "losers round 8",
    "losers round 9",
    "losers round 10",
    "round robin",
    "runoff",
    "knockout 1",
    "knockout 2",
    "knockout 3",
];

export interface Round {
    ID:           number;
    name:         string;
    abbreviation: string;
    isDraft?:     boolean | null;
    mappool:      Mappool[];
    mapOrder?:    MapOrder[] | null;
}