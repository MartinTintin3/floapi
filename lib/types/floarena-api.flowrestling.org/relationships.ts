import type { BoutIdentifier } from "./objects/bout";
import type { BracketPlacementIdentifier } from "./objects/bracketPlacement";
import type { DivisionIdentifier } from "./objects/division";
import type { EventIdentifier } from "./objects/event";
import type { GradeIdentifier } from "./objects/grade";
import type { RoundNameIdentifier } from "./objects/roundName";
import type { TeamIdentifier } from "./objects/team";
import type { WeightClassIdentifier } from "./objects/weightClass";
import type { WrestlerIdentifier } from "./objects/wrestler";

export type Generic = BracketPlacement | TopWrestler | BottomWrestler | WeightClass | Team | RoundName | Grade | Division | Event | Bout;

export type ToWrestler = Exclude<Generic, TopWrestler | BottomWrestler>;
export type ToBout = Exclude<Generic, Bout>;

export type TopWrestler = { topWrestler: { data: WrestlerIdentifier } };
export type BottomWrestler = { bottomWrestler: { data: WrestlerIdentifier } };
export type WeightClass = { weightClass: { data: WeightClassIdentifier } };
export type Team = { team: { data: TeamIdentifier } };
export type RoundName = { roundName: { data: RoundNameIdentifier } };
export type Grade = { grade: { data: GradeIdentifier } };
export type Division = { division: { data: DivisionIdentifier } };
export type Bout = { bout: { data: BoutIdentifier } };
export type Event = { event: { data: EventIdentifier } };
export type BracketPlacement = { bracketPlacements: { data: BracketPlacementIdentifier[] } };

export type AllToBout = TopWrestler & BottomWrestler & WeightClass & RoundName & Event;
export type AllToWrestler = Team & Division & Event & WeightClass & BracketPlacement;