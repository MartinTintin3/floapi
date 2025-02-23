import { BoutIdentifier } from "./objects/bout";
import { BracketPlacementIdentifier } from "./objects/bracketPlacement";
import { DivisionIdentifier } from "./objects/division";
import { EventIdentifier } from "./objects/event";
import { GradeIdentifier } from "./objects/grade";
import { RoundNameIdentifier } from "./objects/roundName";
import { TeamIdentifier } from "./objects/team";
import { WeightClassIdentifier } from "./objects/weightClass";
import { WrestlerIdentifier } from "./objects/wrestler";

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