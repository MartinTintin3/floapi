import { Identifier as BoutIdentifier } from "./objects/bout";
import { Identifier as BracketPlacementIdentifier } from "./objects/bracketPlacement";
import { Identifier as DivisionIdentifier } from "./objects/division";
import { Identifier as EventIdentifier } from "./objects/event";
import { Identifier as GradeIdentifier } from "./objects/grade";
import { Identifier as RoundNameIdentifier } from "./objects/roundName";
import { Identifier as TeamIdentifier } from "./objects/team";
import { Identifier as WeightClassIdentifier } from "./objects/weightClass";
import { Identifier as WrestlerIdentifier } from "./objects/wrestler";

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