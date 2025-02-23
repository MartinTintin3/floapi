import { BracketPlacementObject } from "./objects/bracketPlacement";
import { BoutObject, DivisionObject, EventObject, GradeObject, RoundNameObject, TeamObject, WeightClassObject, WrestlerObject } from "./types";

export * from "./objects/bout";
export * from "./objects/bracketPlacement";
export * from "./objects/division";
export * from "./objects/event";
export * from "./objects/grade";
export * from "./objects/roundName";
export * from "./objects/team";
export * from "./objects/weightClass";
export * from "./objects/wrestler";

export type FloObject = BoutObject | DivisionObject | EventObject | GradeObject | RoundNameObject | TeamObject | WeightClassObject | WrestlerObject | BracketPlacementObject;