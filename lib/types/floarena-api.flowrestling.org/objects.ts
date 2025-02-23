import type { BracketPlacementObject } from "./objects/bracketPlacement";
import type { BoutObject, DivisionObject, EventObject, GradeObject, RoundNameObject, TeamObject, WeightClassObject, WrestlerObject } from "./types";

export type * from "./objects/bout";
export type * from "./objects/bracketPlacement";
export type * from "./objects/division";
export type * from "./objects/event";
export type * from "./objects/grade";
export type * from "./objects/roundName";
export type * from "./objects/team";
export type * from "./objects/weightClass";
export type * from "./objects/wrestler";

export type FloObject = BoutObject | DivisionObject | EventObject | GradeObject | RoundNameObject | TeamObject | WeightClassObject | WrestlerObject | BracketPlacementObject;